import { useAppContext } from '../AppProvider';

const TaskList = () => {
	const { tasks } = useAppContext();

	let taskList;

	if (tasks.length > 0) {
		taskList = (
			<ul className="list-group">
				{tasks.map(task =>
					<li className="list-group-item bg-body-secondary p-12 mb-3">
						{task.taskName}
					</li>,
				)}
			</ul>
		);
	} else {
		taskList = <h4>You have no tasks created</h4>;
	}

	return (
		<div className="container mt-5 mb-5">
			<h3>Task List</h3>
			{taskList}
		</div>
	);
};

export default TaskList;
