import mongodb from 'mongodb';

module.exports = class SymposiumController {
    constructor() {
        this.ObjectID = mongodb.ObjectID;
        this.collection;
        this.loadCollection = this.loadCollection.bind(this);

        this.query = this.query.bind(this);
        this.get = this.get.bind(this);
        this.put = this.put.bind(this);
        this.post = this.post.bind(this);
        this.delete = this.delete.bind(this);

        this.getDocuments = this.getDocuments.bind(this);
    }
    
    loadCollection(req, res, next) {
        this.collection = req.app.get('db').collection('Symposiums');
        return next();
    }

    query(req, res) {
        const query = req.query || {};

        this.collection
            .find(query)
            .toArray()
            .then(result => res.send(result))
            .catch(err => res.send(err));
    }
    get(req, res) {
        console.log('inside get');
        return res.send(req.documents);
    }
    put(req, res) {
        console.log('inside put');
        return this.collection
            .updateOne(req.documents[0], { $set:req.body })
            .then(result => 
                this.getDocuments(req, res, () => this.get(req, res))
            )
            .catch(err => res.send(err))
    }
    post(req, res) {
        this.collection
            .insertOne(req.body)
            .then(result => req.params.id = result.insertedId)
            .then(result => 
                this.getDocuments(req, res, () => this.get(req, res))
            )
            .catch(err => res.send(err));
    }

    delete(req, res) {
        // soft delete
        req.body = {
            deletedAt: new Date()
        };
        return this.put(req, res);
    }

    getDocuments(req, res, next) {
        console.log(req.method);
        return req.method === 'POST' && req.params.id === 'new'?
            next() :    
            this.collection
                .find({ _id: this.ObjectID(req.params.id )})
                .toArray()
                .then(result => {
                    if (!result[0]) throw (Error('404'));
                    req.documents = result;
                })
                .then(() => next())
                .catch(err => res.send(err.message));
    }

    secureQuery(req, res) {
        req.app.get('db')
            .collection('test')
            .insertOne({
                name: 'testName'
            }, (err, result) => 
                err ? err : res.send(result)
            )
        // res.send('GET /users')
    }

    getUsers(req, res) {
        req.app.get('db')
            .collection('test')
            .find({})
            .toArray((err, result) =>
                err ? err : res.send(result)
            );
    }

}