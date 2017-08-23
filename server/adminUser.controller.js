import crypto from 'crypto';
// import jwt from 'jsonwebtoken';

module.exports = class AdminUserController {
    constructor() {
        this.crypto = crypto;
    }

    secureQuery(req, res) {
        req.app.get('db').collection('test').insertOne(
            { name: 'testName' }
        , (err, result) => {
            err ? console.log(err) : console.log(result);
            res.send('GET /users');
        })
        // res.send('GET /users')
    }

}