const ValueError = require('../utils/valueError');
const NotExistsError = require('../utils/notExistsError');

module.exports = class BaseRepository {
    constructor() {
        this._db = {};
    }

    create({entity}) {
        if(!entity) {
            throw new Error('Entity is required');
        }
        
        const key = Number(Object.keys(this._db).slice(-1).pop() || -1) + 1;
        entity.id = key;
        this._db[key] = entity;
    }

    update({entity}) {
        if(!entity) {
            throw new Error('Entity is required');
        }
        if(!entity.id && entity.id !== 0) {
            throw new ValueError('Id is required');
        }
        if(!this._db[entity.id]) {
            throw new NotExistsError('Entity doesn\'t exist');
        }

        this._db[entity.id] = entity;
    }

    delete({id}) {
        if(!id && id !== 0) {
            throw new ValueError('Id is required');
        }

        delete this._db[id]
    }

    getSingle({id}) {
        if(!id && id !== 0) {
            throw new ValueError('Id is required');
        }

        const entity = this._db[id];
        if(!entity) {
            throw new NotExistsError('Entity doesn\'t exist');
        }
        
        return entity;
    }

    queryPaginated({entity = {}, offset = 0, limit = 20}) {
        if(!offset) {
            offset = 0;
        }
        if(!limit) {
            limit = 20;
        }
        const nextOffset = offset + limit;
        const results = Object.values(this._db)
                     .filter((dbEntity) => Object.keys(entity)
                                                 .every((key) => entity[key] === dbEntity[key]))
                     .slice(offset, nextOffset);
        return {
            results,
            nextOffset: results.length === limit ? nextOffset : offset,
            limit
        }
    }
}