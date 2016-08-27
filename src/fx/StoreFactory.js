export default (Dispatcher, Store, App) => {
	const Data = {};
	const Listeners = [];
	const GetData = () => Object.assign({},Data)
	const Broadcast = () => { for(var l of Listeners) l(GetData()) }
	let StoreInstance = new (Store(Broadcast,Data,App))();
	Dispatcher.listen(StoreInstance.handleEvent.bind(Store));
	return {
		"subscribe": (l) => (Listeners.push(l), void 0),
		"get": () => GetData()
	};
}
