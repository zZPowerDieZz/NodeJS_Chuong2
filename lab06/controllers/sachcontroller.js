const sachModel = require ('../models/sachModel');
const fs = require('fs');
const formidable = require('formidable');
const path= require("path");

const sachList = (req,res) =>{
    let sachs = sachModel.sachList();
    res.render("sachlist",{sachs});
}
const sachThemGet = (req,res)=>{
    res.render("themsach");
}
const sachThemPost = (req,res)=>{
    let form =new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{
        if(err){
            console.log('Lỗi khi upload dữ liệu');
        }else{
            let{tenSach,donGia,xuatXu,moTa,nhaXB} = fields;
            let urlHinh = files.urlHinh.originalFilename;
            let sach = {id:sachs.length + 1, tenSach, donGia, xuatXu, nhaXB, moTa, urlHinh};
            sachModel.sachThem(sach);

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
}

const sachSuaGet = (req,res)=>{
    let id = req.params.id;
    let sach = sachModel.sachSuaGet(id);
    res.render("suasach",{sach});
};
const sachSuaPost = (req,res)=>{
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{
        let{id, tenSach, donGia, xuatXu, nhaXB, moTa} = fields;
        let {originalFilename,filepath} = files.urlHinh;
        let oldSach = sachs.find((s) => s.id == id);

        let urlHinh = oldPath.urlHinh;

        let oldPath = path.join(__dirname,"pulic\\images") + "\\" + urlHinh;

        urlHinh = originalFilename ? originalFilename : urlHinh;

        let newSach = {id , tenSach, donGia, xuatXu, nhaXB, moTa, urlHinh};

        sachModel.sachSuaPost(newSach);

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
}
const sachXoa = (req,res)=>{
    let id = req.params.id;
    let deletePath = path.join(__dirname,"public\\images\\") + sachs[index].urlHinh;
    sachModel.sachXoa(id);

    fs.unlink(deletePath, ()=> console.log("Đã xoá file"));
    res.redirect('/sach/list');
}

module.exports= {
    sachList,sachSuaGet,sachSuaPost,sachThemGet,sachThemPost,sachXoa
}
