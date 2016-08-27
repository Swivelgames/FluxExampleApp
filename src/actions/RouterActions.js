export default (Dispatcher) => {
	return {
		navigate: function(page) {
			Dispatcher.dispatch("navigate", {"page": page});
		}
	}
};
