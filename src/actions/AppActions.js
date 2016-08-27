export default (Dispatcher) => {
	return {
		addItem: function(title) {
			Dispatcher.dispatch("Todo_AddItem", {"title": title});
		},
		removeItem: function(id) {
			Dispatcher.dispatch("Todo_RemoveItem", {"id":id});
		},
		toggleItem: function(id) {
			Dispatcher.dispatch("Todo_ToggleItem", {"id":id});
		}
	}
};
