import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import mongodb from 'mongodb';

import SymposiumStructure from './symposiumStructure';

import adminUser from './api/admin/adminUser.router';
import symposium from './api/symposium/symposium.router';

const app = express();

app.set('config', config);
const port = config.port;

// parser
app.use([
    bodyParser.json(), 
    bodyParser.urlencoded({ extended: true })
]);

// DB
app.use((req, res, next) => {
    return req.app.get('db') 
        ? next() 
        : mongodb.MongoClient
            .connect(config.db.url)
            .then(db => {
                app.set('db', db);
                console.log('connected to MongoDB');
                return next();
            })
            // .then(() => next())
            .catch(err => next(err));
});

app.use((req, res, next) => {
    let SymposiumsCollection = req.app.get('db')
        .collection('Symposiums');
    SymposiumsCollection
        .find({})
        .toArray()
        .then(result => 
            result.length ? 
                next() : 
                SymposiumsCollection.insertOne(SymposiumStructure)
                    .then(result => next())
        )
        .catch(err => next(err));
})

app.use('/admin', adminUser(new express.Router()));
app.use('/api/symposiums?', symposium(new express.Router()));
app.get('/', (req, res) => {
    res.send('Hello es2015!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    console.log(__dirname);
})