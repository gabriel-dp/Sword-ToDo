import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList  from './components/TaskList';
import TaskDetails from './components/TaskDetails';

import './App.css';

const App = () => {
	//get previous data from local storage
	let previous_data = JSON.parse(window.localStorage.getItem('tasks_data'));
	if (previous_data === null) previous_data = [];
	const [tasks, setTasks] = useState (previous_data);

	//saves the data in local storage when tasks is changed
	useEffect(() => {
		window.localStorage.setItem('tasks_data', JSON.stringify(tasks));
	}, [tasks]);

	const handleChangeComplete = (taskId) => {
		const newTasks = tasks.map(task => {
			if (task.id === taskId) return { ...task, completed: !task.completed };
			return task;
		});

		setTasks(newTasks);
	}

	const handleTaskAddition = (taskTitle) => {
		if (taskTitle !== '') {
			const newTasks = [...tasks, {
				title: taskTitle,
				id:	uuidv4(),
				completed: false,
				description: "",
				color: '#7fffd4',
			}];
	
			setTasks(newTasks);
		}
	}

	const handleTaskDelete = (taskName) => {
		const newTasks = tasks.filter(task => task.title !== taskName);
		setTasks(newTasks);
	}

	const handleChangeDescription = (taskName, text) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskName) return { ...task, description: text};
			return task;
		});

		setTasks(newTasks);
	}

	const handleChangeColor = (taskName, hex) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskName) return { ...task, color: hex};
			return task;
		});

		setTasks(newTasks);
	}

	const handleChangeOrder = (index, movement) => {

		var newTasks;

		//changes the position of a index on array
		function arraymove(arr, fromIndex, toIndex) {
			var element = arr[fromIndex];
			arr.splice(fromIndex, 1);
			arr.splice(toIndex, 0, element);
			newTasks = arr;
		}

		//moves the index based on movement direction
		if (movement) {
			arraymove(tasks, index, index+1)
		} else {
			arraymove(tasks, index, index-1)
		}

		//resets the tasks to apply the new tasks
		setTasks([]);
		setTasks(newTasks);
	}

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className='container'>
				<Routes>
					<Route 
						path="/" exact 
						element={
							<>
								<Header text="Sword-ToDo"/>
								<AddTask handleTaskAddition={handleTaskAddition}/>
								<TaskList 
									tasks={tasks} 
									handleChangeComplete={handleChangeComplete} 
									handleChangeOrder={handleChangeOrder}
								/>
							</>
						} 
						/>
					<Route
						path="/:taskTitle" exact element={
							<TaskDetails
								tasks={tasks}
								handleTaskDelete={handleTaskDelete}
								handleChangeDescription={handleChangeDescription}
								handleChangeColor={handleChangeColor}
							/>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;