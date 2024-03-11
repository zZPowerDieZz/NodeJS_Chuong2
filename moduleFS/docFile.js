
const fs = require('fs');

fs.readFile('data.txt','utf8',(err, data) => {
    if (err) {
        console.error('Lỗi đọc file!!!');
        return;
    }
    console.log('Nội dung của tệp: ',data);
});