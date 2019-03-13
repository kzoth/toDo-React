import React from 'react';

import AppHeader from '../AppHeader';
import SearchBar from '../SearchBar';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

import './App.css';

const App = () => {

	const todoData = [
		{label: 'Learn React', important: false, id: 1},
		{label: 'Build React app', important: true, id: 2},
		{label: 'Something else', important: false, id: 3}
	];

	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3}/>
			<div className="top-panel d-flex">
				<SearchBar />
				<ItemStatusFilter />
			</div>
			<TodoList todos = { todoData } />
		</div>
	);
};

export default App;