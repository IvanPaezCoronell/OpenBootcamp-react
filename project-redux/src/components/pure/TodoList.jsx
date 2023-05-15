import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
	return (
		<div className='text-white'>
			<h1 className="text-3xl font-bold text-white p-12  bg-2 ">
				ToDo List
			</h1>
			<ul className='p-12' >
				{todos.map((todo, index) =>
					<Todo  key={index} {...todo} onClick={() => onTodoClick(todo.id)} className='text-black' />,
				)}
			</ul>
		</div>
	);
};

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired,
		}).isRequired,
	).isRequired,
	onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
