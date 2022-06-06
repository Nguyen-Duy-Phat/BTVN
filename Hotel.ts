// Xây dựng lớp KhachSan để quản lý các thông tin về khách trọ.
// - Số ngày trọ, loại phòng trọ, giá phòng, và các thông tin cá nhân về mỗi khách trọ.

import {Genders, People} from "./People";

//Phần tính tiền tự nghịch thêm
export enum Rate {//tạo enum lưu trữ giá của từng loại phòng để tính tiền
    NOMAR = '5e5',
    VIP = '25e5',
    SUPPERVIP = '5e6'
}

export enum Rooms {//Tạo enum lưu trữ về loại phòng
    NOMAR = 'Nomal Room',
    VIP = 'VIP Room',
    SUPPERVIP = 'Supper VIP'
}


export class Hotel extends People {
    private _numberOfDay: number;//số ngày ở
    private _roomType: Rooms = Rooms.NOMAR;//Loại phòng default là phòng thường
    private _ratesRoom: Rate = Rate.NOMAR;//Giá phòng
    constructor(peopleId: string, name: string, gender: Genders, birthDays: string, numberOfDay: number, roomType: Rooms = Rooms.NOMAR, ratesRoom: Rate = Rate.NOMAR) {
        super(peopleId, name, gender, birthDays);//Kế thừa dữ liệu lớp People
        this._numberOfDay = numberOfDay;
        this._ratesRoom = ratesRoom;
        this._roomType = roomType;
    }


    get numberOfDay(): number {
        return this._numberOfDay;
    }

    set numberOfDay(value: number) {
        this._numberOfDay = value;
    }

    get roomType(): Rooms {
        return this._roomType;
    }

    set roomType(value: Rooms) {
        this._roomType = value;
    }

    set ratesRoom(value: Rate.NOMAR) {
        this._ratesRoom = value;
    }

}