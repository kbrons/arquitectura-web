module.exports = class BaseRepository {
    constructor({}) {
        this._db = {};
    }

    create({entity}) {
        if(!entity) {
            throw new Error('Entity is required');
        }
        
        const key = (Object.keys(this._db)[-1] || -1) + 1;
        entity.id = key;
        this._db[key] = entity;
    }

    update({entity}) {
        if(!entity) {
            throw new Error('Entity is required');
        }
        if(!entity.id) {
            throw new Error('Entity must have an id');
        }
        if(!this._db[entity.id]) {
            throw new Error('Entity doesn\'t exist');
        }

        this._db[entity.id] = entity;
    }

    delete({id}) {
        if(!id) {
            throw new Error('Id is required');
        }

        delete this._db[id]
    }

    getSingle({id}) {
        return this._db[id];
    }

    queryPaginated({entity = {}, offset = 0, limit = 20}) {
        return Object.values(this._db)
                     .filter((dbEntity) => Object.keys(entity)
                                                 .every((key) => entity[key] === dbEntity[key]))
                     .slice(offset, offset + limit);
    }
}