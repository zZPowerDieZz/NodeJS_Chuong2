const db = require("./database");

//hàm sachList trả về danh sách các sách từ CSDL
//async nghĩa là bất đồng bộ
const sachList = async () =>{
    let sql="SELECT * FROM sach";
    try{
      let data =await db.query(sql);
    return data;  
    }catch(error){
        throw error;
    }
    
}
//hàm sachThem thêm một đối tượng sách vào CSDL
const sachThem = async (sach)=>{
    let sql="INSERT INTO sach SET ?";
    try{
        let affectRow = await db.query(sql,sach);
        return affectRow;
    }catch (error){
        throw error;
    }
}
//sachSuaGet trả về đối tượng cần sửa
const sachSuaGet =async (id) =>{
    let sql="SELECT * FROM sach WHERE id=?";
    try{
        let data=await db.query(sql,id);
        return data[0];
    }catch(error){
        throw error;
    }
}

const sachSuaPost =async (newSach)=>{
    let sql = "UPDATE sach SET ? WHERE id = ?";
    try{
        let affectRow =await db.query(sql,[newSach,newSach.id]);
        return affectRow;
    }catch(error){
        throw error;
    }
}

const sachXoa =async (id) =>{
    let sql = "DELETE FROM sach WHERE id = ?";
    try{
        let affectRow =await db.query(sql,id);
        return affectRow;
    }catch(error){
        throw error;
    }
}

module.exports ={
    sachList,sachThem,sachSuaGet,sachSuaPost,sachXoa
}