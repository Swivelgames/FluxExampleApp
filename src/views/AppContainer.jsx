import React from 'react';
import HeaderFactory from './components/Header.jsx';
import FooterFactory from './components/Footer.jsx';

export default (App) => class AppContainer extends React.Component {
	constructor() {
		super();
		this.state = this.getState();
		App.Stores.AppStore.subscribe(this.updateState.bind(this));
		App.Stores.RouterStore.subscribe(this.updateState.bind(this));
	}

	updateState() {
		this.setState(this.getState())
	}

	getState() {
		return {
			AppStore: App.Stores.AppStore.get(),
			RouterStore: App.Stores.RouterStore.get()
		};
	}

	render() {
		let Header = HeaderFactory(App);
		let Footer = FooterFactory(App);
		let PageElement = this.state.RouterStore.PageElement;

		return (
			<div className="app-container">
				<Header app={App} appState={this.state} />
				<PageElement app={App} appState={this.state} />
				<Footer app={App} appState={this.state} />
			</div>
		);
	}
}
