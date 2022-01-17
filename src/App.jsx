import React, { createContext } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import usePersistedState from './utils/usePersistedState';

import { ThemeProvider } from 'styled-components'; 
import GlobalStyle from './style/global';
import light from './style/themes/light';
import dark from './style/themes/dark';

import TaskList  from './components/TaskList/TaskList';
import TaskDetails from './components/TaskDetails/TaskDetails';

const App = () => {
	const [tasks, setTasks] = usePersistedState('tasks', []);

	const handleChangeComplete = (taskId) => {
		const newTasks = tasks.map(task => {
			if (task.id === taskId) return { ...task, completed: !task.completed };
			return task;
		});

		setTasks(newTasks);
	}

	const handleTaskAddition = (taskTitle) => {
		const titleFixed = ((taskTitle).replace(/\s+/g, ' ')).trim() //remove extra spaces

		if (titleFixed !== '') {
			let isRepeated = false;
			tasks.map(task => {
				if (task.title === titleFixed) {
					isRepeated = true;
				}
				return 0;
			});

			const newTasks = [...tasks, {
				title: titleFixed,
				id:	uuidv4(),
				completed: false,
				description: '',
				color: 'default',
				startDate: new Date(),
				endDate: '',
			}];
	
			if (!isRepeated) setTasks(newTasks);
		}
	}

	const handleTaskDelete = (taskTitle) => {
		const newTasks = tasks.filter(task => task.title !== taskTitle);
		setTasks(newTasks);
	}

	const handleChangeDescription = (taskTitle, text) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskTitle) return { ...task, description: text};
			return task;
		});

		setTasks(newTasks);
	}

	const handleChangeColor = (taskTitle, hex) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskTitle) return { ...task, color: hex === theme.colors.primary ? 'default' : hex};
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

	const handleChangeTitle = (taskTitle, newTaskTitle) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskTitle) {
				return { ...task, title: newTaskTitle};
			}
			return task;
		});

		setTasks(newTasks);
	}

	const handleChangeDates = (taskTitle, startDate, endDate) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskTitle) return { ...task, startDate: startDate, endDate: endDate};
			return task;
		});

		setTasks(newTasks);
	}

	const handleImportTasks = (importedTasks) => {
		let newTasks = importedTasks.map(task => {
			let repeated = false;
			tasks.map(oldTask => {
				if (task.title === oldTask.title) repeated = true;
				return 0;
			})
			if (!repeated) return task;
			return undefined;
		})

		//deletes undefined elements on array of newTasks
		newTasks = newTasks.filter(function(element) {
			return element !== undefined;
		});

		setTasks(tasks.concat(newTasks));
	}

	const handleDeleteAll = () => {
		setTasks([]);
	}

	const[theme, setTheme] = usePersistedState('theme', light);
	const ThemeContext = createContext(theme);
	const ToggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	}

	return (
		<ThemeProvider theme={theme}>
		<GlobalStyle/>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className='container'>
				<Routes>
					<Route 
						path="/" exact element={
							<TaskList 
								tasks={tasks} 
								handleTaskAddition={handleTaskAddition}
								handleChangeComplete={handleChangeComplete} 
								handleChangeOrder={handleChangeOrder}
								handleImportTasks={handleImportTasks}
								handleDeleteAll={handleDeleteAll}
								toggleTheme={ToggleTheme}
								theme={theme}
							/>
						} 
						/>
					<Route
						path="/:taskTitle" exact element={
							<TaskDetails
								tasks={tasks}
								handleChangeTitle={handleChangeTitle}
								handleTaskDelete={handleTaskDelete}
								handleChangeColor={handleChangeColor}
								handleChangeDescription={handleChangeDescription}
								handleChangeDates={handleChangeDates}
							/>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;