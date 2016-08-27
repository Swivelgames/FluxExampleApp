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
		switch(actionData.action) {
			case "Todo_AddItem":
				Data.Items.push({
					"_id": guid(),
					"done": false,
					"title": actionData.payload.title
				});
				break;
			case "Todo_RemoveItem":
				Data.Items = Data.Items.filter( (i) => i._id!==actionData.payload.id );
				break;
			case "Todo_ToggleItem":
				Data.Items.forEach( (i) => i.done = (i._id===actionData.payload.id) ? !i.done : i.done );
				break;
			default:
				return;
		}

		Broadcast();
	}
}
