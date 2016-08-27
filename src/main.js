import React from 'react';
import ReactDOM from 'react-dom';
import Framework from './fx/';
import AppStoreFactory from './stores/AppStore.js';
import RouterStoreFactory from './stores/RouterStore.js';
import AppActionsFactory from './actions/AppActions.js';
import AppContainerFactory from './views/AppContainer.jsx';

const App = {
	"Stores": {},
	"Actions": {}
};

const Dispatcher = new Framework.Dispatcher();

App.Stores.AppStore = Framework.StoreFactory(Dispatcher, AppStoreFactory, App);
App.Stores.RouterStore = Framework.StoreFactory(Dispatcher, RouterStoreFactory, App);
App.Actions.AppActions = AppActionsFactory(Dispatcher);

const AppContainer = AppContainerFactory(App);

ReactDOM.render(<AppContainer />, document.getElementsByTagName('main')[0]);
