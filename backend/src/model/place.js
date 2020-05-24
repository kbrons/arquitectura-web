module.exports = class Place {
    constructor({id, name}) {
        if (!name) {
            throw new Error('Name is required');
        }

        this.id = id;
        this.name = name;
    }
}