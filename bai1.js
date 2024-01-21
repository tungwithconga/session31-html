function timTuDaiNhat(chuoi) {
    let mangTu = chuoi.split(' ');
    let tuDaiNhat = '';
    let doDaiTuDaiNhat = 0;

    for (let i = 0; i < mangTu.length; i++) {
        if (mangTu[i].length > doDaiTuDaiNhat) {
            tuDaiNhat = mangTu[i];
            doDaiTuDaiNhat = mangTu[i].length;
        }
    }

    return { tuDaiNhat: tuDaiNhat, doDaiTuDaiNhat: doDaiTuDaiNhat };
}

let chuoiTest = "Chú ý rằng từ khóa let giữ giá trị của biến trong phạm vi khối lệnh (block scope).";
let ketQua = timTuDaiNhat(chuoiTest);
console.log("Từ dài nhất là:", ketQua.tuDaiNhat);
console.log("Độ dài của từ đó là:", ketQua.doDaiTuDaiNhat);
