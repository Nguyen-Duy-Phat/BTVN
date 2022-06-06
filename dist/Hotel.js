"use strict";
// Xây dựng lớp KhachSan để quản lý các thông tin về khách trọ.
// - Số ngày trọ, loại phòng trọ, giá phòng, và các thông tin cá nhân về mỗi khách trọ.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = exports.Rooms = exports.Rate = void 0;
const People_1 = require("./People");
//Phần tính tiền tự nghịch thêm
var Rate;
(function (Rate) {
    Rate["NOMAR"] = "5e5";
    Rate["VIP"] = "25e5";
    Rate["SUPPERVIP"] = "5e6";
})(Rate = exports.Rate || (exports.Rate = {}));
var Rooms;
(function (Rooms) {
    Rooms["NOMAR"] = "Nomal Room";
    Rooms["VIP"] = "VIP Room";
    Rooms["SUPPERVIP"] = "Supper VIP";
})(Rooms = exports.Rooms || (exports.Rooms = {}));
class Hotel extends People_1.People {
    constructor(peopleId, name, gender, birthDays, numberOfDay, roomType = Rooms.NOMAR, ratesRoom = Rate.NOMAR) {
        super(peopleId, name, gender, birthDays); //Kế thừa dữ liệu lớp People
        this._roomType = Rooms.NOMAR; //Loại phòng default là phòng thường
        this._ratesRoom = Rate.NOMAR; //Giá phòng
        this._numberOfDay = numberOfDay;
        this._ratesRoom = ratesRoom;
        this._roomType = roomType;
    }
    get numberOfDay() {
        return this._numberOfDay;
    }
    set numberOfDay(value) {
        this._numberOfDay = value;
    }
    get roomType() {
        return this._roomType;
    }
    set roomType(value) {
        this._roomType = value;
    }
    set ratesRoom(value) {
        this._ratesRoom = value;
    }
}
exports.Hotel = Hotel;
