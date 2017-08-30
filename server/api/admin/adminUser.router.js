import AdminUserController from './adminUser.controller';
const adminUserController = new AdminUserController();

module.exports = (router, serverApp) => {
    router
        .route('/user')
        .get(adminUserController.secureQuery)
    //     .post(adminUserController.register);
    router
        .route('/users')
        .get(adminUserController.getUsers);

    return router;
}
/*
const router = express.Router();
const adminUserController = new AdminUserController();
// router.get('/')

router
    .route('/user')
    .get(adminUserController.secureQuery)
//     .post(adminUserController.register);
router
    .route('/users')
    .get(adminUserController.getUsers);
// router
//     .route('/users?/:id')
//     .all(adminUserController.getDocument)
//     .get(adminUserController.secureGet)
//     .put(adminUserController.sucurePut)
//     .post(adminUserController.sucurePut)
//     .delete(adminUserController.delete);


// admin/user/register
// admin/user/edit
// admin/user/login
// admin/user/logout
// admin/users

module.exports = router;
*/