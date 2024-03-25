const sachModel = require ('../models/sachModel');
const fs = require('fs');
const formidable = require('formidable');
const path= require("path");

const sachList = async (req,res) =>{
    let sachs = await sachModel.sachList();
    res.render("sachlist",{sachs});
}
const sachThemGet = (req,res)=>{
    res.render("themsach");
}
const sachThemPost = (req,res)=>{
    let form =new formidable.IncomingForm();
    form.parse(req,async (err, fields, files)=>{
        if(err){
            console.log('Lỗi khi upload dữ liệu');
        }else{
            let{tenSach,donGia,xuatXu,moTa,nhaXB} = fields;
            let urlHinh = files.urlHinh.originalFilename;
            let sach = {tenSach, donGia, xuatXu, nhaXB, moTa, urlHinh};
            await sachModel.sachThem(sach);

            let oldPath = files.urlHinh.filepath;
            let desPath =path.join(__dirname, "..\\public\\images\\") + urlHinh;

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

const sachSuaGet = async (req,res)=>{
    let id = req.params.id;
    let sach =await sachModel.sachSuaGet(id);
    res.render("suasach",{sach});
};
const sachSuaPost = (req,res)=>{
    const form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files)=>{
        let{id, tenSach, donGia, xuatXu, nhaXB, moTa, urlHinh} = fields;
        let {originalFilename,filepath} = files.urlHinh;

        let oldPath = path.join(__dirname,"..\\pulic\\images") + "\\" + urlHinh;

        urlHinh = originalFilename ? originalFilename : urlHinh;

        let newSach = {id , tenSach, donGia, xuatXu, nhaXB, moTa, urlHinh};

        await sachModel.sachSuaPost(newSach);

        res.redirect('/sach/list');
        if (originalFilename){
            let newPath = path.join(__dirname, "..\\public\\images") + "\\" + originalFilename;
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
const sachXoa =async (req,res)=>{
    let id = req.params.id;
    let sach =await sachModel.sachSuaGet(id)
    let deletePath = path.join(__dirname,"..\\public\\images\\") + sach.urlHinh;
    await sachModel.sachXoa(id);
    //xoá hình tương ứng trong images
    fs.unlink(deletePath, ()=> console.log("Đã xoá file"));
    res.redirect('/sach/list');
}

module.exports= {
    sachList,sachSuaGet,sachSuaPost,sachThemGet,sachThemPost,sachXoa
}
