const Place = require('../model/place');
const BaseService = require('./baseService');

module.exports = class PlacesService extends BaseService {
    constructor({repository}) {
        super({repository, entityClass: Place});
    }
}
