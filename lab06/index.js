const rootRoutes = require('./routes/rootroute')
const express = require('express');
const fs = require('fs');
const formidable = require('formidable');
const path= require("path");
const app = express();
const port = 3000;

const sachs =[
    {id:1, tenSach:'Thiết kế web', donGia:250000, xuatXu:1, moTa:'Sách dạy thiết kế web', nhaXB:3, urlHinh:'tkweb.jpg'},
    {id:2, tenSach:'Truyện cười', donGia:100000, xuatXu:0, moTa:'Giải trí', nhaXB:1, urlHinh:'truyencuoi.jpg'}
];

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static("./public"));

app.use('/',rootRoutes);

app.listen(port,()=>{
    console.log(`Server đang chạy tại http://localhost:${port}`);
});