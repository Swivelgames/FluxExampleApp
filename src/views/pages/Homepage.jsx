import React from 'react';

export default (App) => class Header extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		App.Actions.AppActions.addItem(this.refs.todoTitle.value)
		this.refs.todoTitle.value = "";
	}

	render() {
		let TodoItems = App.Stores.AppStore.get().Items.map( (v,i) => {
			var styles = {};
			if(v.done) {
				styles = {
					textDecoration: "line-through"
				};
			}
			return (
				<li key={"todoListItem__"+i}>
					<input type="checkbox" onClick={() => App.Actions.AppActions.toggleItem(v._id)} checked={v.done} />
					<b style={styles}>{v.title}</b>
					<button onClick={() => App.Actions.AppActions.removeItem(v._id)}>Delete</button>
				</li>
			)
		});

		return (
			<section>
				<b>Todo Items</b>
				<ul>{TodoItems}</ul>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="todoTitle" />
					<button type="submit">Add Todo</button>
				</form>
			</section>
		)
	}
}
