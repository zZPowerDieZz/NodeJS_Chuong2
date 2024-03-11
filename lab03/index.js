const express = require('express');
const config = require("./config/config");
const rootRouter = require("./routes/rootroute");
const app = express();
const port = 3000;

//Thiết lập cấu hình
config(app);

//thiết lập routes
app.use('/',rootRouter);

app.listen(port,()=>{
    console.log(`Server đang chạy tại http://localhost:${port}`);
});