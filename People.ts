export enum Genders {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

export class People {
    private _peopleId: string;
    private _name: string;
    private _gender: Genders = Genders.OTHER;
    private _birthDays: Date;

    constructor(peopleId: string, name: string, gender: Genders, birthDays: string) {
        this._peopleId = peopleId;
        this._name = name;
        this._gender = gender;
        this._birthDays = new Date(birthDays);
    }


    get peopleId(): string {
        return this._peopleId;
    }

    set peopleId(value: string) {
        this._peopleId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get birthDays(): Date {
        return this._birthDays;
    }

    set birthDays(value: Date) {
        this._birthDays = value;
    }

    get gender(): Genders {
        return this._gender;
    }

    set gender(value: Genders) {
        this._gender = value;
    }

}