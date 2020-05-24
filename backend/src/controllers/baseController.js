
module.exports = class BaseController {
	constructor({service}) {
		this._service = service;
	}

	create({params}) {
		this._service.create({params});
	}

	update({params}) {
		this._service.update({params});
	}

	delete({id}) {
		this._service.delete({id});
	}

	getSingle({id}) {
		return this._service.getSingle({id});
	}

	getAllPaginated({offset, limit}) {
		return this._service.getAllPaginated({offset, limit});
	}
}
