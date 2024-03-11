const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
    const data={
        title:'Trang chủ',
        message:'Chào mừng đến với trang web của chúng tôi!'
    };
    res.render('app1',{title:'Trang chủ',message:'Chào mừng đến với EJS'});
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});