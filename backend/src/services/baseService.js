module.exports = class BaseService { 
	constructor({repository, entityClass}) {
		this._repository = repository;
		this._entityClass = entityClass;
	}

	create({params}) {
		const entity = this._entityClass(params);
		this._repository.create({entity});
	}

	update({params}) {
		const entity = this._entityClass(params);
		this._repository.update({entity});
	}

	delete({id}) {
		this._repository.delete({id});
	}

	getSingle({id}) {
		return this._repository.getSingle({id});
	}

	getAllPaginated({offset, limit}) {
		return this._repository.queryPaginated({offset, limit});
	}
}
