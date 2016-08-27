import fetch from 'fetch';

export default (Dispatcher) => {
	return {
		getItems: function() {
			fetch(`http://localhost:3050/services.js`).then( (res) => {
				return res.json();
			}).then( (data) => {
				if(data.success===true) {
					Dispatcher.dispatch("Todo_AllItems", data);
				} else {
					Dispatcher.dispatch("error", {"error": data.error});
				}
			});
		},
		addItem: function(title) {
			fetch(`http://localhost:3050/services.js?action=add&title=${title}`).then( (res) => {
				return res.json();
			}).then( (data) => {
				if(data.success===true) {
					Dispatcher.dispatch("Todo_AllItems", data);
				} else {
					Dispatcher.dispatch("error", {"error": data.error});
				}
			});
		},
		removeItem: function(id) {
			fetch(`http://localhost:3050/services.js?action=remove&id=${id}`).then( (res) => {
				return res.json();
			}).then( (data) => {
				if(data.success===true) {
					Dispatcher.dispatch("Todo_AllItems", data);
				} else {
					Dispatcher.dispatch("error", {"error": data.error});
				}
			});
		},
		toggleItem: function(id) {
			fetch(`http://localhost:3050/services.js?action=toggle&id=${id}`).then( (res) => {
				return res.json();
			}).then( (data) => {
				if(data.success===true) {
					Dispatcher.dispatch("Todo_AllItems", data);
				} else {
					Dispatcher.dispatch("error", {"error": data.error});
				}
			});
		}
	}
};
