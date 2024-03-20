const sachModel = require ('../models/sachModel');
const fs = require('fs');
const formidable = require('formidable');
const path= require("path");

const sachList = (req,res) =>{
    sachModel.sachList((sachs) =>{
        res.render("sachlist",{sachs});
    });
}
const sachThemGet = (req,res)=>{
    res.render("themsach");
}
const sachThemPost = (req,res)=>{
    const form =new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{
            let {tenSach,donGia,xuatXu,nhaXB,moTa} = fields;
            let {originalFilename,filepath} = files.urlHinh;
            let sach = { tenSach, donGia, xuatXu, nhaXB, moTa, urlHinh:originalFilename};

            sachModel.sachThem(sach,(data)=>{
                if(data.affectedRows > 0){
                    let newPath = path.join(__dirname,"..\\public\\images") + "\\"  + originalFilename;
                    fs.copyFile(filepath,newPath, (err) =>{
                        if(err){
                            throw err;
                        }
                        fs.unlink(filepath, () => console.log("Đã xoá file tạm"));
                        console.log ("upload success file" + originalFilename);
                        res.redirect('/sach/list');
                    })
                }
            })  
        })
}

const sachSuaGet = (req,res)=>{
    let id = req.params.id;
    let sach = sachModel.sachSuaGet(id,(sach)=>{
        res.render('suasach',{sach});
    }); 
};
const sachSuaPost = (req,res)=>{
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=>{
        //lấy thông tin hiệu chỉnh từ form
        let { id, tenSach, donGia, xuatXu, nhaXB, moTa,urlHinh } = fields;
        let { originalFilename, filepath } = files.urlHinh;
        //tạo đối tượng sách ban đầu
        let sach = { id, tenSach, donGia, xuatXu, nhaXB, moTa, urlHinh };
        //nếu có thay đổi hình ảnh thì cập nhật hình ảnh và xoá hình ảnh cũ
        if (originalFilename){
            sach.urlHinh = originalFilename;//bổ sung thuộc tính urlHinh vào sach
            let oldPath = path.join(__dirname,"..\\public\\images") + "\\" + urlHinh; 
            let newPath = path.join(__dirname,"..\\public\\images") + "\\" + originalFilename;
            fs.copyFile(filepath,newPath,(err)=>{
                if(err){
                    throw err;
                }
                fs.unlink(filepath, () => console.log("Đã xoá file tạm"));
                fs.unlink(oldPath, () => console.log("Đã xoá file cũ"));
                console.log("uploaded success file" + originalFilename);
            })
        }
        //cập nhật về database
        sachModel.sachSuaPost(sach,()=>{
            res.redirect('/sach/list');
        });
    })
}
const sachXoa = (req,res)=>{
    let id = req.params.id;
    sachModel.sachXoa(id,(urlHinh)=>{
        //xoá hình trong images
        let deletePath=path.join(__dirname,"..//public//images//") + urlHinh;
        console.log(deletePath);
        fs.unlink(deletePath,()=>console.log("Đã xoá file"));
            res.redirect('/sach/list');
    });
}

module.exports= {
    sachList,sachSuaGet,sachSuaPost,sachThemGet,sachThemPost,sachXoa
}
