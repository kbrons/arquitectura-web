const BaseRepository = require('./baseRepository');
const ValueError = require('../utils/valueError');

module.exports = class TodoRepository extends BaseRepository{
    getByPlace({placeId, offset, limit}) {
        if(!placeId) {
            throw new ValueError('PlaceId is required');
        }

        return this.queryPaginated({
            entity: {
                placeId: placeId
            },
            offset,
            limit
        });
    }
}
