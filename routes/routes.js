var express = require('express');

var userController=require('../src/user/userController');
var userloginController = require('../src/userlogin/userloginController');

const router = express.Router();

router.route('/user/getall').get(userController.getDataControllerfn);
router.route('/user/create').post(userController.creatUserControllerfn);

router.route('/userlogin/login').post(userloginController.userloginControllerfn);

module.exports=router;

// {
//     "TextArea" :"mayur",
//     "Reason" : "nothing",
//     "Type" : "anything",
//     "Divison" : "strategy",
//     "Category" : "dont",
//     "Priority" :"urgent",
//     "Department" : "computer",
//     "Location" : "nashik"

// }