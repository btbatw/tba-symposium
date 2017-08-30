import crypto from 'crypto';
// import jwt from 'jsonwebtoken';

module.exports = class AdminUserController {
    constructor() {
        this.crypto = crypto;
    }

    secureQuery(req, res) {
        req.app.get('db')
            .collection('test')
            .insertOne({
                name: 'testName'
            }, (err, result) => 
                err ? err : res.send(result.ops)
            )
        // res.send('GET /users')
    }

    getUsers(req, res) {
        req.app.get('db')
            .collection('test')
            .find({})
            // .toArray((err, result) =>
            //     err ? err : res.send(result)
            // );
            .toArray()
            .then(result => res.send(result))
            .catch(err => res.send(err));
    }

}