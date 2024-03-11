const khoaHocs =[
    {id:1,tenKhoaHoc:"Thiết kế web",donGia:250000,giaoVien:"Lê Tùng"},
    {id:2,tenKhoaHoc:"Lập trình ASP.NET",donGia:240000,giaoVien:"Lê Thành"},
    {id:3,tenKhoaHoc:"Lập trình hướng đối tượng",donGia:220000,giaoVien:"Lê Sáng"},
    {id:4,tenKhoaHoc:"Lập trình PHP",donGia:230000,giaoVien:"Lê Thị Lan"},
];
const khoaHocTim =(id)=>{
    return khoaHocs.find((kh)=>kh.id == id);
}
module.exports={
    khoaHocTim,
}