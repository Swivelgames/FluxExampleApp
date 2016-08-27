import HomepageFactory from '../views/pages/Homepage.jsx';

export default (Broadcast,Data,App) => class RouterStore {
	constructor() {
		Object.assign(Data, {
			"CurrentPage": "Homepage",
			"PageElement": HomepageFactory(App)
		});
	}

	handleEvent(actionData) {
		switch(actionData.action) {
			case "navigate":
				Data.CurrentPage = actionData.payload.page;
				Data.PageElement = require('../views/pages/'+actionData.payload.page+'.jsx').default(App);
				break;
			default:
				return;
		}

		Broadcast();
	}
}
