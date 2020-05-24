const Todo = require('../model/todo');
const BaseService = require('./baseService');

module.exports = class TodoService extends BaseService {
    constructor({repository}) {
        super({repository, entityClass: Todo});
    }

    getByPlace({placeId, offset, limit}) {
        return this._repository.getByPlace({placeId, offset, limit});
    }
}
