const express = require('express');
const app = express();
const port = 3000;
const config = require('./config/config');
const rootRoute = require('./routes/rootroute');

config(app);
// Cấu hình Route
app.use('/',rootRoute);
app.listen(port,() => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
