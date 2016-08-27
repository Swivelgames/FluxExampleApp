export default class Dispatcher {
	constructor() {
		this.__listeners = [];
	}

	dispatch(eventName, payload) {
		for(let listener of this.__listeners) {
			listener({
				"action": eventName,
				"payload": payload
			});
		}
	}

	listen(listener) {
		this.__listeners.push(listener);
	}
}
