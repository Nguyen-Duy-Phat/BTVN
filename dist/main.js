"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = require("./People");
const Hotel_1 = require("./Hotel");
const Hotel1_1 = require("./Hotel1");
let clients = new Hotel_1.Hotel("001061004474", "Trần Trùng Trục", People_1.Genders.MALE, "2020/5/25", 5, Hotel_1.Rooms.SUPPERVIP, Hotel_1.Rate.SUPPERVIP);
let clients1 = new Hotel_1.Hotel("001061004484", "Trần Như Nhộng", People_1.Genders.FEMALE, "2021/5/8", 1, Hotel_1.Rooms.NOMAR, Hotel_1.Rate.NOMAR);
let clients2 = new Hotel_1.Hotel("001061004284", "Trần Truồng", People_1.Genders.FEMALE, "2022/5/8", 3, Hotel_1.Rooms.VIP, Hotel_1.Rate.VIP);
//Thêm
let results = new Hotel1_1.Hotel1;
results.addPeople([clients, clients1]); // add theo dạng Array
results.addPeople(clients2); //add theo dạng Obj
//Hiển thị danh sách khách trọ
console.table(results.showListLodger());
//Xóa khách hàng
let deletePeople = new Hotel1_1.Hotel1();
deletePeople.deletePeople(0);
console.table(deletePeople.showListLodger()); //Hiển thị lại sau khi xóa
