import {Genders, People} from './People';
import {Hotel,Rate, Rooms} from './Hotel';
import {Hotel1} from './Hotel1';

let clients = new Hotel("001061004474", "Trần Trùng Trục", Genders.MALE, "2020/5/25", 5, Rooms.SUPPERVIP, Rate.SUPPERVIP);
let clients1 = new Hotel("001061004484", "Trần Như Nhộng", Genders.FEMALE, "2021/5/8", 1, Rooms.NOMAR, Rate.NOMAR);
let clients2 = new Hotel("001061004284", "Trần Truồng", Genders.FEMALE, "2022/5/8", 3, Rooms.VIP, Rate.VIP);


//Thêm
let results = new Hotel1;
results.addPeople([clients,clients1]);// add theo dạng Array
results.addPeople(clients2);//add theo dạng Obj

//Hiển thị danh sách khách trọ
console.table(results.showListLodger());

//Xóa khách hàng
let deletePeople = new Hotel1();
deletePeople.deletePeople(0);
console.table(deletePeople.showListLodger());//Hiển thị lại sau khi xóa