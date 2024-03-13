const khoaHocModel = require('../model/khoahocmodel');
const khoaHocList =(req,res) =>{
    let khoaHocs= khoaHocModel.khoaHocList();
    res.render('dsKhoaHoc',{khoaHocs});
}

const khoaHocAdd = (req,res)=>{
    if(req.method ==="GET"){
        res.render('themKhoaHoc');
    }else if (req.method ==="POST"){
    let newCourse = req.body;
    khoaHocModel.khoaHocAdd(newCourse);
    res.redirect('/khoahoc/list');
    }
}

const khoaHocDelete = (req,res) =>{
    // delete khoá học
    let id = req.params.id;
  khoaHocModel.khoaHocDelete(id);
    res.redirect('/khoahoc/list');
}
const khoaHocEdit = (req,res)=> {
    if(req.method ==="GET") {
        let id = req.params.id;
    let khoaHoc= khoaHocModel.khoaHocEdit(id);
    res.render('suaKhoaHoc',{khoaHoc});
    }else if (req.method ==="POST"){
        let editCourse = req.body;
   khoaHocModel.khoaHocEdit(editCourse);
   res.redirect('/khoahoc/list');
    }
}
module.exports ={
    khoaHocList,
    khoaHocAdd,
    khoaHocDelete,
    khoaHocEdit

}