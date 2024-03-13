const { param } = require("../routes/khoahocroute");



const khoaHocs =[
    {id:1,tenKhoaHoc: "Lập trình Window", donGia:5000000,giaoVien:"Lê Hoàng" },
    {id:2,tenKhoaHoc: "Lập trình PHP", donGia:4000000,giaoVien:"Lê Lộc" },
    {id:3,tenKhoaHoc: "Lập trình ASP.NET", donGia:3000000,giaoVien:"Lê Tuấn" },
    {id:4,tenKhoaHoc: "CSDL", donGia:2000000,giaoVien:"Lê Giang" },
];
const khoaHocList = ()=> {
    return khoaHocs;
}

const khoaHocAdd = (khoaHoc) =>{
    khoaHoc.id = khoaHocs.length +1;
    khoaHocs.push(khoaHoc);
}
const khoaHocDelete =(id)=>{
    let index = khoaHocs.findIndex((kh)=> kh.id==id);
    khoaHocs.splice(index,1);
}

const khoaHocEdit =(param) =>{
    if(typeof param ==='string') {
        //Gửi id cho hàm
        return khoaHocs.find((kh) => kh.id == param);
    }else if(typeof param ==='object'){
        let index = khoaHocs.findIndex((kh)=> kh.id == param.id);
        khoaHocs[index]= param;
    }
}
module.exports ={
    khoaHocList,
    khoaHocAdd,
    khoaHocDelete,
    khoaHocEdit,
}