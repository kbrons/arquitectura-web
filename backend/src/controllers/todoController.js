const BaseController = require('./baseController');

module.exports = class PlaceController extends BaseController{
    getByPlace({placeId, offset, limit}) {
        return this._service.getByPlace({placeId, offset, limit});
    }
}
