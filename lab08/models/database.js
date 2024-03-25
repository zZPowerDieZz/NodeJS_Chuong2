const mysql =require('mysql');
const util =require('util');
//tạo kết nối đến CSDL
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sachnode'
});
//chuyển đổi promise
db.query =util.promisify(db.query).bind(db);

//thực hiện kết nối
db.connect((err)=>{
    if(err){
        console.log("Kết nối thất bại");
    }else{
        console.log("Kết nối CSDL thành công");
    }
})
module.exports=db;