const Place = require('../model/place');
const BaseService = require('./baseService');

module.exports = class PlaceService extends BaseService {
    constructor({repository}) {
        super({repository, entityClass: Place});
    }
}
