module.exports = class Todo {
    constructor({id, title, placeId, description, deadline, priority}) {
        if (!title) {
            throw new Error('Title is required');
        }
        if (!placeId) {
            throw new Error('Place is required');
        }

        this.id = id;
        this.title = title;
        this.placeId = placeId;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
    }
}