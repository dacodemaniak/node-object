/**
 * @name Client
 * @author Aélion
 * @version 1.0.0
 * @package models
 * @abstract Definition of a client
 */
class Client {

    constructor() {
            this._name = null;
            this._email = null;
            this._phoneNumber = null;
            this._concurrent = null;

            this._isActive = true;
        }
        /**
         * @var _name Nom du client
         * @param {*} name 
         * @return void
         */
    setName(name) {
        if (this._name === null) {
            this._name = name;
        }
        return this;
    }

    /**
     * @return String
     * Returns the name of the Client
     */
    getName() {
        return this._name;
    }

    setEMail(email) {
        this._email = email;
        return this;
    }

    getEMail() {
        return this._email;
    }

    setPhone(phoneNumber) {
        this._phoneNumber = phoneNumber;
        return this;
    }

    getPhone() {
        return this._phoneNumber;
    }

    isActive(isActive) {
        this._isActive = isActive;
        return this;
    }

    getStatut() {
        if (this._isActive == true) {
            return 'Client actif';
        }

        return 'Client inactif';
    }

    setConcurrent(client) {
        this._concurrent = client;
        return this;
    }

    getConcurrent() {
        return this._concurrent;
    }

    sayHello() {
        if (!this._concurrent) {
            return `Hello, je suis ${this._name} [${this._email}], you can call me at ${this._phoneNumber}`;
        } else {
            return `Hello, je suis le gentil ${this._name} et je suis en concurrence avec ${this._concurrent.sayHello()}`;
        }
    }
}

module.exports = Client;