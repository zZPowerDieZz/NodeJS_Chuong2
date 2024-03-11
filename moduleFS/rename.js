const fs = require('fs');

fs.rename('newName.txt','TepMoi.txt',(err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Đã đổi tên thành công');
});