const userList=(req,res)=>{
    res.render('listUser');
}
const userAdd=(req,res)=>{
    res.render('addUser');
}
const userEdit=(req,res)=>{
    res.render('editUser');
}
const userDelete=(req,res)=>{
    res.render('delUser');
}
module.exports={
    userList,
    userAdd,
    userEdit,
    userDelete
}