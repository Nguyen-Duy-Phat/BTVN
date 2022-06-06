"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel1 = void 0;
//Khởi tạo mảng lưu trữ danh sách khách
// listOfCustomers : Lodger[] = [];//
class Hotel1 {
    //Thêm khách trọ
    addPeople(newPeople) {
        if (Array.isArray(newPeople)) //Kiểm tra dữ liệu nhập vào là dạng mảng ( trường hợp inport file nhiều người cùng 1 lúc )
            Hotel1.listOfCustomers.push(...newPeople); //Đúng thì push ...
        else
            Hotel1.listOfCustomers.push(newPeople); //Sai thì là kiểu dữ liệu Obj tức đơn lẻ 1 người thì thì thì thì cũng push thôi
    }
    //Hiển thị danh sách khách ở trọ
    showListLodger() {
        // console.table(Hotel.listOfCustomers);
        return Hotel1.listOfCustomers;
    }
    //Xóa khách trọ
    deletePeople(index) {
        Hotel1.listOfCustomers.splice(index, 1);
    }
}
exports.Hotel1 = Hotel1;
Hotel1.listOfCustomers = []; //Dùng dữ liệu tĩnh cho quen ,hoặc khởi tạo mảng bình thường như trên
