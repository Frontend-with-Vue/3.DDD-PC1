export class Winner {
    constructor(name, gender, email, login, phone, picture, nat) {
        this._name = name;
        this._gender = gender;
        this._email = email;
        this._login = login;
        this._phone = phone;
        this._picture = picture;
        this._nat = nat;
    }

    get name() {
        return this._name;
    }

    get gender() {
        return this._gender;
    }

    get email() {
        return this._email;
    }

    get login() {
        return this._login;
    }

    get phone() {
        return this._phone;
    }

    get picture() {
        return this._picture;
    }

    get nat() {
        return this._nat;
    }
}