const Todo = require('../model/todo');
const BaseService = require('./baseService');
const NotExistsError = require('../utils/notExistsError');
const ValueError = require('../utils/valueError');

module.exports = class TodoService extends BaseService {
    constructor({ repository, placeService }) {
        super({ repository, entityClass: Todo });
        this._placeService = placeService;
    }

    create({ params }) {
        try {
            const place = this._placeService.getSingle({ id: params.placeId });

            if (place) {
                super.create({ params });
            }
        }
        catch (error) {
            if (error instanceof NotExistsError) {
                throw new ValueError('The place specified doesn\'t exist');
            }
        }
    }

    getByPlace({ placeId, offset, limit }) {
        return this._repository.getByPlace({ placeId, offset, limit });
    }
}
