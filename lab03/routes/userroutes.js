const express = require("express");
const userController = require("../controllers/usercontroller");
const userRouter = express.Router();

userRouter.get('/list',userController.userList);
userRouter.get('/add',userController.userAdd);
userRouter.get('/edit/:id',userController.userEdit);
userRouter.get('/delete/:id',userController.userDelete);
module.exports=userRouter;