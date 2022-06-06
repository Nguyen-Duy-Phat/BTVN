"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = exports.Genders = void 0;
var Genders;
(function (Genders) {
    Genders["MALE"] = "Male";
    Genders["FEMALE"] = "Female";
    Genders["OTHER"] = "Other";
})(Genders = exports.Genders || (exports.Genders = {}));
class People {
    constructor(peopleId, name, gender, birthDays) {
        this._gender = Genders.OTHER;
        this._peopleId = peopleId;
        this._name = name;
        this._gender = gender;
        this._birthDays = new Date(birthDays);
    }
    get peopleId() {
        return this._peopleId;
    }
    set peopleId(value) {
        this._peopleId = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get birthDays() {
        return this._birthDays;
    }
    set birthDays(value) {
        this._birthDays = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
}
exports.People = People;
