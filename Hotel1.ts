import {Genders, People} from "./People";
import {Hotel, Rate, Rooms} from './Hotel';
//Khởi tạo mảng lưu trữ danh sách khách
// listOfCustomers : Lodger[] = [];//
export class Hotel1 {
    static listOfCustomers: Hotel[] = [];//Dùng dữ liệu tĩnh cho quen ,hoặc khởi tạo mảng bình thường như trên

//Thêm khách trọ
    addPeople(newPeople: Hotel | Hotel[]): void {
        if (Array.isArray(newPeople))//Kiểm tra dữ liệu nhập vào là dạng mảng ( trường hợp inport file nhiều người cùng 1 lúc )
            Hotel1.listOfCustomers.push(...newPeople);//Đúng thì push ...
        else Hotel1.listOfCustomers.push(newPeople);//Sai thì là kiểu dữ liệu Obj tức đơn lẻ 1 người thì thì thì thì cũng push thôi
    }

//Hiển thị danh sách khách ở trọ
    showListLodger(): any {
        // console.table(Hotel.listOfCustomers);
        return Hotel1.listOfCustomers;
    }

//Xóa khách trọ
    deletePeople(index: number): void {
        Hotel1.listOfCustomers.splice(index, 1);
    }

// //Tính tiền khi khách trả phòng
// caculatorMoney(index: number): number {
//
// }

}

