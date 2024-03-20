const db=require('./database');


//Data
// const sachs =[
//     {id:1, tenSach:'Thiết kế web', donGia:250000, xuatXu:1, moTa:'Sách dạy thiết kế web', nhaXB:3, urlHinh:'tkweb.jpg'},
//     {id:2, tenSach:'Truyện cười', donGia:100000, xuatXu:0, moTa:'Giải trí', nhaXB:1, urlHinh:'truyencuoi.jpg'}
// ];
const sachList = (callback) => {
    let sql="SELECT * FROM sach";
    db.query(sql,(err,data)=>{
        if(err) throw err;
        callback(data);
    })
};

const sachThem = (sach,cb) => {
    let sql="INSERT INTO sach SET ?";
    db.query(sql,sach,(err,data)=>{
        if(err) throw err;
        cb(data);
    })
}

const sachSuaGet = (id,cb) =>{
    let sql ="SELECT * FROM sach WHERE id =?";
    db.query(sql,id,(err,data)=>{
        if(err) throw err;
        cb(data[0]);
    })
}

const sachSuaPost = (sach,cb)=>{
    let id = sach.id;
    let sql ="UPDATE sach SET ? WHERE id = ?";
    db.query(sql,[sach,id],(err,data)=>{
        if (err) throw err;
        if(data.affectedRows > 0){
            console.log("Update success");
            cb();
        }
    })
}
const sachXoa = (id,cb) =>{
    let sqlUrl="SELECT * FROM sach WHERE id=?";
    db.query(sqlUrl,id,(err,dataUrl)=>{
        if(err) throw err;
        let sqlDel = "DELETE FROM sach WHERE id = ?";
        db.query(sqlDel,id,(err,dataSach)=>{
        if(err) throw err;
        if(dataSach.affectedRows > 0){
            cb(dataUrl[0].urlHinh);
        }
    })
})

}
module.exports ={
    sachList,sachThem,sachSuaGet,sachSuaPost,sachXoa
}