const express = require('express');
const config =(app) =>{
    //Thiết lập cấu hình view engine sử dụng EJS
    app.set('view engine','ejs');
    app.set('views','views');
    app.use(express.urlencoded({extended:true}));
}
module.exports = config;