import React from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import { BiMoveVertical } from 'react-icons/bi'

import './styles/Task.css';

const Task = ({index, task, handleChangeOrder}) => {
	//navigates to the task description
	const navigate = useNavigate();
	const handleTaskDetailsClick = () => {
		navigate(`/${task.title}`);
	}
	
	//controls task draggable
	const handleDrag = (e, ui) => {
		if (Math.abs(ui.y) >= 60) {
			handleChangeOrder(index, (ui.y > 0));
		}
	}	
	//returns the container to default position
	const handleStopDrag = (e, ui) => {
		ui.node.style.transform = "translate(0,0)";
	}
	
	return (
		<Draggable
			axis="y"
			handle=".drag-task-button"
			onDrag={handleDrag}
			onStop={handleStopDrag}
			bounds={index==0 ? {top:0} : {}}
		>
			<div 
				className='task-container' 
				onClick={handleTaskDetailsClick} 
				style={task.completed ? 
					{color:'gray', textDecoration: 'line-through'} : 
					{borderLeft: `8px solid ${task.color}`}
				}
			>
				<div 
					className='task-title' 
					style={task.completed ? {marginLeft: 8} : {}}
				>
					<p>{task.title}</p>
				</div>
				<div className="buttons-container">
					<button className='drag-task-button' onClick={(event) => event.stopPropagation()}>
						<BiMoveVertical/>
					</button>
				</div>
			</div>
		</Draggable>
	);
}
 
export default Task;