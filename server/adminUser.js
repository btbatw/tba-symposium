import express from 'express';
import AdminUserController from './adminUser.controller';

const router = express.Router();
const adminUserController = new AdminUserController();
// router.get('/')

router
    .route('/users?')
    .get(adminUserController.secureQuery)
//     .post(adminUserController.register);

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