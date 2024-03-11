const fs = require('fs');

fs.unlink('TepMoi.txt',(err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Tệp đã được xoá thành công');
});