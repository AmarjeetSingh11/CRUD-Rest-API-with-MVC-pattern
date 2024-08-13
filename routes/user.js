const express = require('express');
const router = express.Router();
const {
    handleGetAllUser,
    handleUserById,
    handleCreateUser,
    handleUpdateUserById,
    handleDeleteUserById
} = require('../controllers/user')
const User = require('../models/user'); 
//Routes

//REST API 
router.get('/',handleGetAllUser);

//In this API we need dynamic Path Parameters use this syntax you can use this (:id)
router.get('/:id', handleUserById);

router.post('/',handleCreateUser);

router.patch('/:id',handleUpdateUserById);

router.delete('/:id',handleDeleteUserById);

module.exports = router;