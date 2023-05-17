import { useState } from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { useAppContext } from '../AppProvider';

const TaskForm = () => {
	const { dispatch } = useAppContext();

	const [taskName, setTaskName] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const task = {
			taskName
		};
		dispatch({
			type: 'ADD_TASK',
			value: task
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className="form-label">Create Task</label>
			<div className="input-group mb-3">
				<input
					onChange={e => setTaskName(e.target.value)}
					type="text"
					className="form-control"
					placeholder="Task Name"
				/>
				<button className="btn btn-success" type="submit">
					<AiFillFileAdd />
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
