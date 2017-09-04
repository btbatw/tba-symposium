import SymposiumController from './symposium.controller';
const symposiumController = new SymposiumController();

module.exports = (router, serverApp) => {
    router
        .route('/')
        .all(symposiumController.loadCollection)
        .get(symposiumController.query);
    
    router
        .route('/:id')
        .all(symposiumController.loadCollection)
        .all(symposiumController.getDocuments)
        .get(symposiumController.get)
        .put(symposiumController.put)
        // id == 'new' for POST
        .post(symposiumController.post)
        .delete(symposiumController.delete)
    // router
    //     .route('/users')
    //     .get(adminUserController.getUsers);

    return router;
}