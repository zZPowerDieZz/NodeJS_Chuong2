const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send(`<h1>Trang chủ </h1>`);
});

app.get('/about',(req,res)=>{
    res.send(`<h1>Trang giới thiệu </h1>`);

});
app.get('/detail',(req,res)=>{
    res.send(`<h1>Trang chi tiết </h1>`);

});
app.get('*',(req,res)=>{
    res.send(`<h1>Trang không tồn tại </h1>`);

});
const PORT = 3000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));
