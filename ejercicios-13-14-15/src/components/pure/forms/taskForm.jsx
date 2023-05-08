import { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/level.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {
	const nameRef = useRef('');
	const descriptionRef = useRef('');
	const levelRef = useRef(LEVELS.NORMAL);

	function addTask(e) {
		e.preventDefault();
		const newTask = new Task(
			nameRef.current.value,
			descriptionRef.current.value,
			false,
			levelRef.current.value
		);
		add(newTask)
	}

	const normalLevel = {
		color: 'blue',
		fontWeight: 'bold'
	}

	const urgentLevel = {
		color: 'red',
		fontWeight: 'bold'
	}

	const blockingLevel = {
		color: 'yellow',
		fontWeight: 'bold'
	}



	return (
		<form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
			<div className="form-outline flex-fill">
				<input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task name'/>
				<input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task description'/>
				<label htmlFor='selectLevel' className='sr-only'>
					
					<select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
						<option style={normalLevel} value={LEVELS.NORMAL}>Normal</option>
						<option style={urgentLevel} value={LEVELS.URGENT}>Urgent</option>
						<option style={blockingLevel} value={LEVELS.BLOCKING}>Blocking</option>
					</select>
				</label>
			<button type='submit' className='btn btn-success btn-lg ms-2'>{length > 0 ? 'Add New Task' : 'Create Your First Task'}</button>
			</div>

		</form> 
	) 
};

TaskForm.propTypes = {
	add: PropTypes.func.isRequired,
	length: PropTypes.number.isRequired
};

export default TaskForm;
