// mongoose.Types.ObjectId('578df3efb618f5141202a196')
// import response from './response.js';
module.exports = class Controller {
    constructor(modelName, serverApp) {
        this.modelName = modelName;
        this.Model;
        // this.Model = (serverApp.get('mongoose')) ?
        //     serverApp.get('mongoose').model(this.modelName) : null;
        this.populate;
        this.aggregate;

        const customs = ['statics', 'middlewares', 'methods', 'helpers'];
        customs.forEach((item) => {
            this[item] = (args = {}) => {
                // freeze?
                Object.assign(this, args);
            };
        });

        this.getObjectId = mongoose.Types.ObjectId;
        // request
        this.get = this.get.bind(this);
        this.put = this.put.bind(this);
        this.query = this.query.bind(this);
        this.post = this.post.bind(this);
        this.delete = this.delete.bind(this);

        // middlewares
        this.loadModel = this.loadModel.bind(this);
        this.getDocument = this.getDocument.bind(this);

        // response
        this.response = response;

        // helpers
        this._cleanReqBody = this._cleanReqBody.bind(this);
        this._consolidateAggregate = this._consolidateAggregate.bind(this);
    }

    /*
        request
    */
    query(req, res) {
        const aggregate = this.aggregateForQuery || this.aggregate || req.aggregate;
        const populate = this.populateForQuery || this.populate || req.populate;
        const Model = this.Model || req.Model;
        const query = req.query || {};
        const callback = req.callback;
        if (!Model) {
            return this.loadModel(req, res, () => this.query(req, res));
        }

        Object.assign(query, {
            deletedAt: null
        });
        Promise.resolve()
            .then(() => {
                if (aggregate) {
                    const ca = this._consolidateAggregate(aggregate, query);
                    return Model
                        .aggregate(ca)
                        .allowDiskUse(true);
                } else {
                    return Model.find(query).exec();
                }
            })
            .then((documents) => {
                if (populate) {
                    return Model.populate(documents, populate);
                } else {
                    return Promise.resolve(documents);
                }
            })
            .then((documents) => {
                if (documents.length > 0) {
                    if (!callback) {
                        return this.response.success(documents, req, res);
                    } else {
                        req.documents = documents;
                        callback(req, res);
                    }
                } else
                if (callback) {
                    req.documents = [];
                    callback(req, res);
                } else {
                    return this.response.notFound(null, req, res);
                }
            })
            .catch((err) => {
                return this.response.error(err, req, res);
            });
    }

    get(req, res) {
        const populate = this.populateForGet || this.populate || req.populate;
        const aggregate = this.aggregateForGet || this.aggregate || req.aggregate;

        const Model = this.Model || req.Model;
        const callback = req.callback;

        if (!Model) {
            return this.loadModel(req, res, () => this.get(req, res));
        }
        return Promise.resolve()
            .then(() => {
                if (aggregate) {
                    const ca = this._consolidateAggregate(aggregate, {
                        _id: this.getObjectId(req.params.id),
                        deletedAt: null
                    });
                    return Model.aggregate(ca).allowDiskUse(true);
                } else {
                    return Model.findById(req.params.id).where({
                        deletedAt: null
                    }).exec();
                }
            })
            .then((document) => {
                if (populate) {
                    return Model.populate(document, populate);
                } else {
                    return Promise.resolve(document);
                }
            })
            .then((document) => {
                // TODO: use project for aggregate
                document = (Array.isArray(document)) ? document[0] : document;
                if (document) {
                    if (!callback) {
                        return this.response.success(document, req, res);
                    } else {
                        req.document = document;
                        callback(req, res);
                    }
                } else {
                    return this.response.notFound(null, req, res);
                }
            })
            .catch((err) => {
                return this.response.error(err, req, res);
            });
    }

    put(req, res) {
        const populate = this.populateForGet || this.populate || req.populate;
        const Model = this.Model || req.Model;
        const callback = req.callback;

        if (!Model) {
            return this.loadModel(req, res, () => this.put(req, res));
        }

        Model
            .findByIdAndUpdate(
                req.params.id,
                this._cleanReqBody(req.body), {
                    new: true,
                    runValidators: true
                })
            .exec()
            .then((updatedDocument) => {
                if (populate) {
                    return Model.populate(updatedDocument, populate);
                } else {
                    return Promise.resolve(updatedDocument);
                }
            })
            .then((updatedDocument) => {
                if (updatedDocument) {
                    if (!callback) {
                        return this.response.success(updatedDocument, req, res);
                    } else {
                        req.document = updatedDocument;
                        callback(req, res);
                    }
                } else {
                    return this.response.notFound(null, req, res);
                }
            })
            .catch((err) => {
                return this.response.error(err, req, res);
            });
    }

    post(req, res) {
        const Model = this.Model || req.Model;
        const callback = req.callback;
        const populate = this.populateForGet || this.populate || req.populate;
        const body = req.body;

        if (!Model) {
            return this.loadModel(req, res, () => this.post(req, res));
        }

        Model
            .create(this._cleanReqBody(body))
            .then((document) => {
                if (populate) {
                    return Model.populate(document, populate);
                } else {
                    return Promise.resolve(document);
                }
            })
            .then((document) => {
                if (callback) {
                    req.document = document;
                    callback(req, res);
                } else {
                    return this.response.success(document, req, res);
                }
            })
            .catch((err) => {
                return this.response.error(err, req, res);
            });
    }

    delete(req, res) {
        // soft delete
        req.body = {
            deletedAt: new Date()
        };
        return this.put(req, res);
    }

    /*
        middlewares
    */
    loadModel(req, res, next) {
        if (!this.modelName) {
            return next();
        }
        if (this.Model) {
            return next();
        }
        this.Model = req.app.get('mongoose').model(this.modelName);
        return next();
    }

    getDocument(req, res, next) {
        const Model = this.Model || req.Model;

        if (!Model || !req.params.id) {
            return next();
        }
        Model
            .findById(req.params.id)
            .where({
                deletedAt: null
            })
            .exec()
            .then((document) => {
                if (document) {
                    req.document = document;
                    return next();
                } else {
                    return this.response.notFound(null, req, res);
                }
            })
            .catch((err) => {
                return this.response.error(err, req, res);
            });
    }

    /*
        helpers
    */
    _cleanReqBody(reqBody, additionalFields = []) {
        if (!reqBody) return;
        if (reqBody._isACleanedReqBody) return reqBody;
        const defaultFields = ['_id', 'createdAt'].concat(additionalFields);
        // console.log(defaultFields);
        Object.keys(reqBody)
            .filter(element => defaultFields.includes(element))
            .forEach(element => delete reqBody[element]);
        reqBody['updatedAt'] = new Date();
        return reqBody;
    }

    _consolidateAggregate(aggregate, query) {
        const pos = aggregate.findIndex((element) => {
            return (element.$match);
        });
        if (pos > -1) {
            aggregate.splice(pos, 1);
        }
        aggregate.unshift({
            $match: query
        });
        return aggregate;
    }

};
