const express = require('express');
// const bodyParser = require('body-parser');//có thể sử dụng express 4.1.6 trở đi
const app = express();
const khoaHocs=[
    {id:1,tenKhoaHoc:"Thiết kế web",donGia:250000,giaoVien:"Lê Hùng"},
    {id:2,tenKhoaHoc:"Lập trình ASP.NET",donGia:240000,giaoVien:"Lê Huy"},
    {id:3,tenKhoaHoc:"Lập trình hướng đối tượng",donGia:230000,giaoVien:"Lê Anh"},
    {id:4,tenKhoaHoc:"Lập trình PHP",donGia:220000,giaoVien:"Lê Mạnh"},
];
app.use(express.urlencoded({extended:true}));//thay bằng express.urlencoded

app.get('/',(req,res)=>{
    let danhSach =`<h1>Danh sách các khoá học</h1><ul>`
    khoaHocs.forEach(c=>{
        danhSach +=`<li>
                        <a style="text-decoration:none;color:green; font-size:30px;"href="/khoahoc/${c.id}">${c.tenKhoaHoc}</a>
                    </li>`;
    })
    danhSach += `</ul>`
    res.send(danhSach);
});
app.get('/khoahoc/:id',(req,res)=>{
    let id = req.params.id;
    let kh = khoaHocs.find(k=>k.id==id);
    let thongTin =`<h2>Thông tin chi tiết khoá học</h2>
                   <h3>Tên khoá học: ${kh.tenKhoaHoc}</h3>
                   <p>Giá: ${kh.donGia}$</p>
                   <p>Tên giáo viên: ${kh.giaoVien}</p>
    `;
    res.send(thongTin);
});
app.get('/them-khoahoc',(req,res)=>{
    res.send(`<h1>Thêm khoá học</h1>
              <form action="them-khoahoc" method="POST">
                <label>Tên khoá học</label>
                <input type="text" name="tenKhoaHoc" /><br><br>
                <label>Đơn giá</label>
                <input type="text" name="donGia" /><br><br>
                <label>Giáo viên</label>
                <input type="text" name="giaoVien" /><br><br>
                <input type="submit" value="Ghi"/>
              </form>
    `);
    app.post('/them-khoahoc',(req,res)=>{
        let newCourse=req.body;
        console.log(newCourse);
        newCourse.id=khoaHocs.length+1;
        khoaHocs.push(newCourse);
        res.redirect('/');
    })
});
app.get('*',(req,res)=>{
    res.send(`<h1>Trang không tồn tại</h1>`);
});
const PORT = 3000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));