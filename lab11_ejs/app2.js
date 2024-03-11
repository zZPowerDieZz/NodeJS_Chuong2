const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','./views');
app.get('/users', (req, res)=>{
    const users =[
        {name: 'User 1',email: 'user1@example.com'},
        {name: 'User 2',email: 'user2@example.com'},
        //... more users
    ];
    res.render('users',{users: users});
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});