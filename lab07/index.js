const rootRoutes = require('./routes/rootroute')
const express = require('express');
const app = express();
const port = 3000;



app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static("./public"));

app.use('/',rootRoutes);

app.listen(port,()=>{
    console.log(`Server đang chạy tại http://localhost:${port}`);
});