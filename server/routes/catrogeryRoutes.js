//require express
const express = require('express');
const router = express.Router();

const { requireSignIn, isAdmin } = require('../middlewere/authmiddlware');
const {createCategoryController}=require('../controllers/CategoryController.js')
//router








router.post('/create-category', requireSignIn,isAdmin,createCategoryController);

module.exports=router;
