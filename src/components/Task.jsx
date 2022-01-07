import React from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import { BiRedo, BiCheck, BiTrashAlt, BiMoveVertical } from 'react-icons/bi'

import './styles/Task.css';

const Task = ({index, task, handleTaskClick, handleTaskDelete, handleChangeOrder}) => {
	const navigate = useNavigate();
	const handleTaskDetailsClick = () => {
		navigate(`/${task.title}`);
	}
	
	const handleDrag = (e, ui) => {
		if (Math.abs(ui.y) >= 60) {
			handleChangeOrder(index, (ui.y > 0));
		}
	}	

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
				style={task.completed ? 
					{color:'gray', textDecoration: 'line-through'} : 
					{borderLeft: `8px solid ${task.color}`}
				}
			>
				<div 
					className='task-title' 
					onClick={handleTaskDetailsClick} 
					style={task.completed ? {marginLeft: 8} : {}}
				>
					<p>{task.title}</p>
				</div>
				<div className="buttons-container">
					<button className='complete-task-button' onClick={() => handleTaskClick(task.id)}>
						{task.completed ? (<BiRedo/>) : (<BiCheck/>)}
					</button>
					<button className='delete-task-button' onClick={() => handleTaskDelete(task.id)}>
						<BiTrashAlt/>
					</button>
					<button className='drag-task-button'>
						<BiMoveVertical/>
					</button>
				</div>
			</div>
		</Draggable>
	);
}
 
export default Task;