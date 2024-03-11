const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

app.set('views','views');
app.use(express.urlencoded({extended:true}));
const khoaHocs =[
    {id:1,tenKhoaHoc:"Thiết kế web",donGia:250000,giaoVien:"Lê Tùng"},
    {id:2,tenKhoaHoc:"Lập trình ASP.NET",donGia:240000,giaoVien:"Lê Thành"},
    {id:3,tenKhoaHoc:"Lập trình hướng đối tượng",donGia:220000,giaoVien:"Lê Sáng"},
    {id:4,tenKhoaHoc:"Lập trình PHP",donGia:230000,giaoVien:"Lê Thị Lan"},
];

app.get('/khoahoc/list',(req,res)=>{
    res.render('dsKhoaHoc',{khoaHocs:khoaHocs});
});
app.get('/khoahoc/them',(req,res)=>{
    res.render('themKhoaHoc');
});
app.post('/khoahoc/them',(req,res)=>{
    let newCouse = req.body;
    newCouse.id=khoaHocs.length+1;
    khoaHocs.push(newCouse);
    res.redirect('/khoahoc/list');
});
app.get('/khoahoc/xoa/:id',(req,res)=>{
    let id=req.params.id;
    let index=khoaHocs.findIndex((kh) => kh.id==id);
    khoaHocs.splice(index,1);
    res.redirect('/khoahoc/list');
});
app.get('/khoahoc/sua/:id',(req,res)=>{
    //Sửa khoá học
    let id = req.params.id;
    let khoaHoc = khoaHocs.find((kh)=> kh.id==id);
    res.render('suaKhoaHoc',{khoaHoc});
});
app.post('/khoahoc/sua',(req,res)=>{
    let editCoure = req.body;
    let index = khoaHocs.findIndex((kh)=> kh.id == editCoure.id);
    khoaHocs[index] = editCoure;
    res.redirect('/khoahoc/list');
});
app.listen(port,()=>{
    console.log(`Server đang chạy tại http://localhost:${port}`);
});