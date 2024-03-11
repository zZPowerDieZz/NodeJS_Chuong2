const khoaHocModel = require("../model/khoahocmodel");
const khoaHocList=(req,res)=>{
    res.render('listKhoaHoc');
}
const khoaHocAdd=(req,res)=>{
    res.render('addKhoaHoc');
}
const khoaHocEdit=(req,res)=>{
    let id = req.params.id;
    let khoaHoc=khoaHocModel.khoaHocTim(id);
    res.render('editKhoaHoc',{khoaHoc});
}
const khoaHocDelete=(req,res)=>{
    res.render('delKhoaHoc');
}
module.exports={
    khoaHocList,
    khoaHocAdd,
    khoaHocEdit,
    khoaHocDelete
}