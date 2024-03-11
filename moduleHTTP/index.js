const http = require('http');
const querystring = require('querystring');
const ptb1 = require("./giaiphuongtrinh");
const server = http.createServer((req, res) => {
    if(req.method === "POST"){
        let body = '';

        //lắng nghe sư kiện 'data' để nhận dữ liệu từ request
        req.on('data',chunk =>{
            body += chunk.toString(); //chuyển chunk sang string và thêm vào body
        });
        //khi nhận đủ dữ liệu, xử lý dữ liệu đó từ sự kiện 'end'
        req.on('end',() =>{
            //phân tích dữ liệu form được gửi lên từ request body
            const postData = querystring.parse(body);
            let hsa = postData.hsa;
            let hsb = postData.hsb;
            //thiết lập header và trả về phản hồi
            //res.statusCode = 200;
            //res.setHeader('Content-Type','text/html;charset=utf-8');
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            res.end(`<h1>Kết quả giải phương trình: ${ptb1(hsa,hsb)}</h1>`);
        });
    }else{
        //nếu không phải POST, trả về một form HTML đơn giản
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html;charset=utf-8');
        //res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(`
            <form action="/" method="post">
            <label for="hsa">Hệ số a: </label>
            <input type="text" id ="hsa" name="hsa"><br><br>
            <label for="hsb">Hệ số b: </label>
            <input type="text" id ="hsb" name="hsb"><br><br>
            <input type = "submit" value="Giải">
            </form>
        `);
    }
});
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});