const express = require('express');
const khoaHocRoute= express.Router();
const khoaHocController = require('../controllers/khoahoccontrolle');

// Route chính
khoaHocRoute.get('/list',khoaHocController.khoaHocList );
khoaHocRoute.get('/them',khoaHocController.khoaHocAdd);
khoaHocRoute.post('/them',khoaHocController.khoaHocAdd);
khoaHocRoute.get('/xoa/:id',khoaHocController.khoaHocDelete);
khoaHocRoute.get('/sua/:id',khoaHocController.khoaHocEdit);
khoaHocRoute.post('/sua',khoaHocController.khoaHocEdit);

module.exports = khoaHocRoute;
