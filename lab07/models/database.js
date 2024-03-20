const mysql =require('mysql');
//tạo kết nối đến CSDL
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sachnode'
});

//thực hiện kết nối
db.connect((err)=>{
    if(err){
        console.log("Kết nối thất bại");
    }else{
        console.log("Kết nối CSDL thành công");
    }
})
module.exports=db;