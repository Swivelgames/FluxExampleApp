import React from 'react';

export default (App) => class Header extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		App.Actions.AppActions.addItem(this.refs.todoTitle.value)
		this.refs.todoTitle.value = "";
	}

	render() {
		let AppStore = App.Stores.AppStore.get();

		if(AppStore.Errors) {
			console.warn(AppStore.Errors);
		}

		let TodoItems = AppStore.Items.sort( (a,b) => {
			return a.done && !b.done;
		}).map( (v,i) => {
			var styles = { color: "blue", fontStyle: "normal", fontWeight: "bold" };
			if(v.done) {
				Object.assign(styles, {
					textDecoration: "line-through",
					fontStyle: "italic",
					fontWeight: "normal",
					color: "grey"
				});
			}
			return (
				<li key={"todoListItem__"+i}>
					<input type="checkbox" onChange={() => App.Actions.AppActions.toggleItem(v._id)} checked={v.done} />
					<span style={styles}>{v.title}</span>
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
