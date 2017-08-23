module.exports = {
    app: {
        title: 'TBA Symposium',
        description: '',
        keywords: 'mongodb, express, angularjs, node.js, mongoose',
        // googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID ||
        //     'GOOGLE_ANALYTICS_TRACKING_ID'
    },
    db: {
        name: 'tbasymposium',
        url: process.env.MONGOLAB_URI || process.env.MONGODB_URI || 'mongodb://localhost/tbasymposium',
        // promise: global.Promise
    },
    port: process.env.PORT || 8080,
    host: process.env.HOST || '0.0.0.0',
    domain: process.env.DOMAIN,
    
    // entry for server and client
    /*
    entry: {
        app: './', // should be set when app init to avoid absolute paths.
        client: `modules/core/client/src`,
        modules: `modules/`,
        swagger: `swagger/`,
        abstract: `Abstract/`
    }
    */
};