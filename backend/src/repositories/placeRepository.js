const BaseRepository = require('./baseRepository');
const Place = require('../model/place');

module.exports = class PlaceRepository extends BaseRepository{
    constructor() {
        super();
        this._db = {
            0: new Place({id: 0, name: "Casa"}),
            1: new Place({id: 1, name: "Trabajo"}),
        };
    }
}
