import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList  from './components/TaskList';
import TaskDetails from './components/TaskDetails';

import './App.css';

const App = () => {
	const [tasks, setTasks] = useState ([]);

	const handleTaskClick = (taskId) => {
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
			}];
	
			setTasks(newTasks);
		}
	}

	const handleTaskDelete = (taskId) => {
		const newTasks = tasks.filter(task => task.id !== taskId);
		setTasks(newTasks);
	}

	const handleChangeDescription = (taskName, text) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskName) return { ...task, description: text};
			return task;
		});

		setTasks(newTasks);
	}

	return (
		<BrowserRouter>
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
									handleTaskClick={handleTaskClick} 
									handleTaskDelete={handleTaskDelete}
								/>
							</>
						} 
					/>
					<Route
						path="/:taskTitle" exact element={
							<TaskDetails
								tasks={tasks}
								handleChangeDescription={handleChangeDescription}
							/>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;