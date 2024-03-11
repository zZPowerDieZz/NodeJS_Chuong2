const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send(`<h1>Trang chủ </h1>`);
});
app.get('/sanpham',(req,res)=>{
    res.send(`<h1>Trang sản phẩm </h1>`);
});
app.get('/them-sanpham',(req,res)=>{
    res.send(`<h1>Trang chi tiết </h1>
        <from action="/them-sanpham" method="POST">
            <input type="text" name="sanpham"/>
            <input type="submit" name="submit" value="Thêm" />
        </from>
    `);
});
app.get('*',(req,res)=>{
    res.send(`<h1>Trang không tồn tại </h1>`);
});
app.post('/them-sanpham',(req,res)=>{
    res.send(`<h1>Thêm sản phẩm thành công</h1>`);
})

const PORT = 3000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));
