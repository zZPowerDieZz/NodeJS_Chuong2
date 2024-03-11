
const fs = require('fs');

const content = 'Nội dung mới để ghi vào tệp';

fs.writeFile('newFile.txt',content,'utf8',(err) => {
    if (err) {
        console.error(er);
        return;
    }
    console.log('Nội dung ghi thành công');
});