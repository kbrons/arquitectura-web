const ValueError = require('../utils/valueError');

module.exports = class Todo {
    constructor({id, title, placeId, description, deadline, priority}) {
        if (!title) {
            throw new ValueError('Title is required');
        }
        if (!placeId && placeId !== 0) {
            throw new ValueError('Place is required');
        }

        this.id = id;
        this.title = title;
        this.placeId = placeId;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
    }
}