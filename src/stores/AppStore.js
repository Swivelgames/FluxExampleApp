function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export default (Broadcast,Data) => class AppStore {
	constructor() {
		Object.assign(Data, {
			"Items": []
		});
	}

	handleEvent(actionData) {
		Data.Errors = void 0;

		switch(actionData.action) {
			case "error":
				Data.Errors = actionData.payload.error;
				break;
			case "Todo_AllItems":
				Data.Items = actionData.payload.Items;
				break;
			default:
				return;
		}

		Broadcast();
	}
}
