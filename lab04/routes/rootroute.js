const express = require('express');
const rootRoute = express.Router();
const khoaHocRoute = require('./khoahocroute');

rootRoute.use('/khoahoc',khoaHocRoute);
rootRoute.get('/',(req,res)=>{
    res.send('<h1>ỨNG DỤNG QUẢN LÝ KHOÁ HỌC</h1>')
})

module.exports=rootRoute;