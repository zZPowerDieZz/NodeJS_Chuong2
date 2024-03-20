//Data
const sachs =[
    {id:1, tenSach:'Thiết kế web', donGia:250000, xuatXu:1, moTa:'Sách dạy thiết kế web', nhaXB:3, urlHinh:'tkweb.jpg'},
    {id:2, tenSach:'Truyện cười', donGia:100000, xuatXu:0, moTa:'Giải trí', nhaXB:1, urlHinh:'truyencuoi.jpg'}
];
const sachList = () => sachs;

const sachThem = (sach) => {
    sachs.push(sach);
}

const sachSuaGet = (id) =>{
    return sachs.find((s) => s.id == id);
}

const sachSuaPost = (newSach)=>{
    let id = newSach.id;
    let index = sachs.findIndex((s)=> s.id==id);
    sachs[index] = newSach;
}
const sachXoa = (id) =>{
    let index = sachs.findIndex((s)=> s.id==id);
    sachs.splice(index,1);
}
module.exports ={
    sachList,sachThem,sachSuaGet,sachSuaPost,sachXoa
}