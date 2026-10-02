let currentEnrollCode = "";
let isEnrollValid = false;
let totalRevenue = 0;
let totalEnrollments = 0;
let result = true;

while (true) {
    console.log("=====================================");
    console.log("HỆ THỐNG TUYỂN SINH BRIGHTWAY ENGLISH");
    console.log("=====================================");
    console.log("1. Nhập và kiểm chuẩn mã đăng ký.");
    console.log("2. Tính học phí khoá học.");
    console.log("3. Thẩm định số báo danh may mắn");
    console.log("0. Thoát chương trình.");
    console.log("=====================================");
    let choice = +prompt("Nhập lựa chọn của bạn: ")

    switch (choice) {
        case 1:
            currentEnrollCode = "";
            isEnrollValid = false;
            let code = prompt("Nhập mã đăng ký").toUpperCase;
            if (code === null || code.trim() === "") {
                console.log("Chưa nhập mã đăng ký.");
                break;
            }
            if (code.length < 6) {
                console.log("Lỗi: Độ dài nhỏ hơn 6 ký tự");
            } else if (!code.startsWith("MED-")) {
                console.log('Lỗi: Sai tiền tố "ENG"');
            } else if (code.includes(" ")) {
                console.log("Lỗi: Chứa khoảng trắng ở giữa");
            } else {
                currentEnrollCode = code;
                isEnrollValid = true;
                console.log("Mã đăng ký hợp lệ");
            }
            break;
        case 2:
            if (!isEnrollValid) {
                console.log("Phải nhập mã đăng ký trước");
                break;
            }
            let courseCount = prompt("Nhập số khoá học.");
            let pricePerCourse = prompt("Nhập học phí mỗi khoá.");
            if (!Number.isInteger(courseCount) || serviceCount <= 0 || !Number.isInteger(pricePerCourse) || pricePerCourse <= 0) {
                console.log("Dữ liệu không hợp lệ");
                break;
            }
            let total = courseCount * pricePerCourse;
            let count = 0;
            if (courseCount >= 4) {
                count = Math.round(total * 0.1);
            }


            break;
        case 3:
            if (!isEnrollValid) {
                console.log("Phải nhập mã đăng ký trước");
                break;
            }
            let luckyNumber = prompt("Nhập số báo danh may mắn.");
            if (!Number.isInteger(luckyNumber) || luckyNumber <= 0) {
                console.log("Dữ liệu không hợp lệ");
                break;
            }

            break;
        case 0:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }

}