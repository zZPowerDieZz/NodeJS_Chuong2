const express = require('express');
const ptb1 = require("./giaiphuongtrinh")
const app = express();
app.use(express.urlencoded({extended:true}));//thay bằng express.urlencoded

app.get('/',(req,res)=>{
    let phuongTrinh =`<h1>Giải phương trình bậc 1</h1>`
        phuongTrinh +=`
                    <form action="/giai-pt" method="post">
                        <label for="hsa">Hệ số a: </label>
                        <input type="text" id ="hsa" name="hsa"><br><br>
                        <label for="hsb">Hệ số b: </label>
                        <input type="text" id ="hsb" name="hsb"><br><br>
                        <input type = "submit" value="Giải">
                    </form>
                `
    res.send(phuongTrinh);
});

app.post('/giai-pt',(req,res)=>{
    let hsa =req.body.hsa;
    let hsb =req.body.hsb;
    let ketQua =ptb1(hsa,hsb);
    res.send(`<h1>${ketQua}</h1>`);
});

app.get('*',(req,res)=>{
    res.send(`<h1>Trang không tồn tại</h1>`);
});
const PORT = 3000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));