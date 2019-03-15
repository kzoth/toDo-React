import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import SearchBar from '../SearchBar';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

import './App.css';

export default class App extends Component {

	maxId = 100;

	state = {
		todoData: [
			this.createTodoItem('Learn React'),
			this.createTodoItem('Build React app'),
			this.createTodoItem('Something else')
		]
	};

	createTodoItem(label) {
		return { 
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

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

	addItem = (text) => {
		//generate id
		const newItem = this.createTodoItem(text);

		//add element in array
		this.setState(({todoData}) => {
			const newArray = [...todoData, newItem];
			
			return {
				todoData: newArray
			}
		});
	};

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);

		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		];
	}

	onToggleDone = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			};
		});
	};

	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			};
		});
	};

	render() {

		const { todoData } = this.state;

		const doneCount = todoData.filter((el) => el.done).length;

		const todoCount = todoData.length - doneCount;
		
		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount}/>
				<div className="top-panel d-flex">
					<SearchBar />
					<ItemStatusFilter />
				</div>
				<TodoList
					todos = { todoData }
					onDeleted={ this.deleteItem }
					onToggleImportant={ this.onToggleImportant }
					onToggleDone={ this.onToggleDone }/>
				<ItemAddForm
					onItemAdded={ this.addItem }/>
			</div>
		);
	}
};