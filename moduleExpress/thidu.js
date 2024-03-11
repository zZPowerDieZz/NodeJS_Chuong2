const express = require('express');
const app=express();

app.get('/khoahoc',(req,res)=>{
    let name =req.require.ten;
    let age =req.require.tuoi;
    let thongTin =`Full name: ${name} - Age: ${age}`;

    res.send(thongTin);
});
// app.get('/khoahoc/:ten/:tuoi',(req,res)=>{
//     let name =req.params.ten;
//     let age =req.params.tuoi;
//     let thongTin =`Ho ten: ${name} - Tuoi: ${age}`;

//     res.send(thongTin);
// });
app.get('*',(req,res)=>{
    res.send(`<h1>Trang không tồn tại</h1>`);
});
const PORT=3000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));