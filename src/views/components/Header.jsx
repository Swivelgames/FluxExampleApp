import React from 'react';

export default (App) => class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>Todo App Example using React.js / FLUX</h1>
				<nav>
					<button onClick={()=>App.Actions.RouterActions.navigate('Homepage')}>Home</button><br />
					<button onClick={()=>App.Actions.RouterActions.navigate('About')}>About</button>
				</nav>
			</header>
		)
	}
}
