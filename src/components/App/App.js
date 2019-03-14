import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchBar from '../SearchBar';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';

export default class App extends Component {

	state = {
		todoData: [
			{label: 'Learn React', important: false, id: 1},
			{label: 'Build React app', important: true, id: 2},
			{label: 'Something else', important: false, id: 3}
		]
	};

	deleteItem = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id);

			const before = todoData.slice(0, idx);
			const after = todoData.slice(idx + 1);

			const newArray = [...before, ...after];

			return {
				todoData: newArray
			}
		})
	};

	render() {
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3}/>
				<div className="top-panel d-flex">
					<SearchBar />
					<ItemStatusFilter />
				</div>
				<TodoList
					todos = { this.state.todoData }
					onDeleted={ this.deleteItem }/>
			</div>
		);
	}
};