import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';

const App = () => {

	return (
		<div >
			<AppHeader />
			<SearchBar />
			<TodoList />
		</div>
	);
};

ReactDOM.render( < App /> , document.querySelector('#root'));