const express = require("express");
const khoaHocController = require("../controllers/khoahoccontroller");
const khoaHocRouter = express.Router();

khoaHocRouter.get('/list',khoaHocController.khoaHocList);
khoaHocRouter.get('/add',khoaHocController.khoaHocAdd);
khoaHocRouter.get('/edit/:id',khoaHocController.khoaHocEdit);
khoaHocRouter.get('/delete/:id',khoaHocController.khoaHocDelete);
module.exports=khoaHocRouter;