
import mongodb from 'mongodb';
// import config from './config';

import ttbaSymposium2017 from './symposium-ttba-2017.js'; 

const symposiumData = ttbaSymposium2017;
const dbUrl = 'mongodb://localhost/tbasymposium';

mongodb.MongoClient
    .connect(dbUrl)
    .then(db => {

        db.collection('Symposiums')
            .insertOne(symposiumData)
            .then(result => console.log(result.ops[0]._id))

    })
    .catch(err => console.log(err));
