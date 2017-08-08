import express from 'express';
import config from './config';
import mongodb from 'mongodb';

const app = express();

app.set('config', config);
const port = config.port;

// connect db
const connect = () => mongodb.MongoClient.connect(config.db.url, (err, db) => {
    err ? console.log(err) : console.log('connected to MongoDB');
    app.set('db', db ? db : null);
});
app.use((req, res, next) => {
    req.app.get('db') ? null : connect();
    return next();
});

app.get('/', (req, res) => {
    res.send('Hello es2015!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    console.log(__dirname);
})