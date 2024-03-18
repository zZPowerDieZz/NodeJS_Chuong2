
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


app.get('/',(req,res)=>{
    res.render("homepage");
})
app.get('/sach/list',(req,res)=>{
    res.render("sachlist",{sachs});
});
app.get('/sach/them',(req,res)=>{
    res.render("themsach");
});
app.post('/sach/them',(req,res)=>{
    //thêm sách vào nơi lưu trữ
    //install thư viện formidable để phục vụ upload hình . sử dụng như sau
    let form =new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{
        if(err){
            console.log('Lỗi khi upload dữ liệu');
        }else{
            let{tenSach,donGia,xuatXu,moTa,nhaXB} = fields;
            let urlHinh = files.urlHinh.originalFilename;
            let sach = {id: sachs.length + 1, tenSach, donGia, xuatXu, nhaXB, moTa, urlHinh};
            sachs.push(sach);
            console.log(sachs);
            let oldPath = files.urlHinh.filepath;
            let desPath = __dirname + "\\public\\images\\" + urlHinh;

            fs.copyFile(oldPath, desPath, (err) =>{
                if(err){
                    throw err;
                }
                fs.unlink(oldPath, () => console.log("Đã xoá file tạm"));
                console.log ("upload success file" + urlHinh);
                res.redirect('/sach/list');
            })
        }
    });
});

app.get('/sach/sua/:id', (req,res)=>{
    let id = req.params.id;
    let sach = sachs.find((s)=> s.id == id);
    res.render("suasach",{sach});
});
app.post('/sach/sua', (req,res)=>{
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{
        let{id, tenSach, donGia, xuatXu, nhaXB, moTa} = fields;
        let {originalFilename,filepath} = files.urlHinh;
        let sach = sachs.find((s) => s.id == id);

        let urlHinh = oldPath.urlHinh;

        let oldPath = path.join(__dirname,"pulic\\images") + "\\" + urlHinh;

        urlHinh = originalFilename ? originalFilename : urlHinh;

        let newSach = {id , tenSach, donGia, xuatXu, nhaXB, moTa, urlHinh};

        let index = sachs.findIndex((s)=> s.id == id);
        sachs[index] = newSach;

        res.redirect('/sach/list');
        if (originalFilename){
            let newPath = path.join(__dirname, "public\\images") + "\\" + originalFilename;
            fs.copyFile(filepath,newPath,(err)=>{
                if(err){
                    throw err;
                }
                fs.unlink(filepath, () => console.log("Đã xoá file tạm"));
                fs.unlink(oldPath, () => console.log("Đã xoá file cũ"));
                console.log("uploaded success file" + originalFilename);
            })
        }
    })
})
app.get('/sach/xoa/:id',(req,res)=>{
    let id = req.params.id;
    let index = sachs.findIndex((s)=> s.id == id);
    let deletePath = path.join(__dirname,"public\\images\\") + sachs[index].urlHinh;
    sachs.splice(index,1) // xoá sách trong mảng
    //xoá hình tương ứng trong images
    fs.unlink(deletePath, ()=> console.log("Đã xoá file"));
    res.redirect('/sach/list');
});

app.listen(port,()=>{
    console.log(`Server đang chạy tại http://localhost:${port}`);
});