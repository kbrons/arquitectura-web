const BaseController = require('./baseController');

module.exports = class PlaceController extends BaseController{
    getByPlace({placeId, offset, limit}) {
        console.log(`Get by place params: ${JSON.stringify({placeId, offset, limit})}`);
        return this._service.getByPlace({placeId, offset, limit});
    }
}
