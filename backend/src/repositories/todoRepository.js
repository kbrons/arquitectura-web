const BaseRepository = require('./baseRepository');

module.exports = class TodoRepository extends BaseRepository{
    getByPlace({placeId, offset, limit}) {
        if(!placeId) {
            throw new Error('PlaceId is required');
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
