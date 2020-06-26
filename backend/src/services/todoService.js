const Todo = require('../model/todo');
const BaseService = require('./baseService');
const NotExistsError = require('../utils/notExistsError');
const ValueError = require('../utils/valueError');

module.exports = class TodoService extends BaseService {
    constructor({ repository, placeRepository }) {
        super({ repository, entityClass: Todo });
        this._placeRepository  = placeRepository;
    }

    create({ params }) {
        try {
            const place = this._placeRepository.getSingle({ id: params.placeId });

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
        if(!placeId && placeId !== 0) {
            throw new ValueError('PlaceId is required');
        }
        
        return this._repository.queryPaginated({
            entity: {
                placeId: placeId
            },
            offset,
            limit
        });
    }
}
