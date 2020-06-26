
module.exports = class BaseController {
	constructor({service}) {
		this._service = service;
	}

	create({params}) {
		console.log(`Create params: ${JSON.stringify(params)}`);
		this._service.create({params});
	}

	update({params}) {
		console.log(`Update params: ${JSON.stringify(params)}`);
		this._service.update({params});
	}

	delete({id}) {
		console.log(`Delete params: ${JSON.stringify(id)}`);
		this._service.delete({id});
	}

	getSingle({id}) {
		console.log(`Get single params: ${JSON.stringify(id)}`);
		return this._service.getSingle({id});
	}

	getAllPaginated({offset, limit}) {
		console.log(`Get all paginated params: ${JSON.stringify({offset, limit})}`);
		return this._service.getAllPaginated({offset, limit});
	}
}
