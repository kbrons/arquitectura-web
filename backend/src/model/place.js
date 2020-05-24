const ValueError = require('../utils/valueError');

module.exports = class Place {
    constructor({id, name}) {
        if (!name) {
            throw new ValueError('Name is required');
        }

        this.id = id;
        this.name = name;
    }
}