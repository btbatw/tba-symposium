import express from 'express';
import config from './config';
import mongodb from 'mongodb';

import adminUser from './adminUser';

const app = express();

app.set('config', config);
const port = config.port;

app.use((req, res, next) => {
    return req.app.get('db') 
        ? next() 
        : mongodb.MongoClient.connect(config.db.url, (err, db) => {
            err ? console.log(err) : console.log('connected to MongoDB');
            app.set('db', db ? db : null);
            return next();
        });
});

app.use('/admin', adminUser)
app.get('/', (req, res) => {
    res.send('Hello es2015!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    console.log(__dirname);
})