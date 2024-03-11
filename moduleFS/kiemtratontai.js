const fs = require('fs');
const filePath = 'file.txt';

fs.exists(filePath,(e) => {
    console.log(e ? 'Tồn tại' : 'Không tồn tại');
});