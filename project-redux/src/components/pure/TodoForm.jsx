import { useRef } from 'react';
import PropTypes from 'prop-types';
import {AiFillFileAdd} from 'react-icons/ai'

const Todoform = ({ submit }) => {
	const newText = useRef();

	return (
		<div className='py-12'>
			<h2 className="mb-2 text-2xl font-bold tracking-tight text-white-900">
				Create Task
			</h2>
			<form 
				onSubmit={e => {
					e.preventDefault();
					submit(newText.current.value);
					newText.current.value = '';
				}}
			>
				<input type="text" ref={newText} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white px-2'/>
				<button type="submit" style={{marginLeft: '10px'}} className='bg-green-400 hover:bg-green-300 text-white font-bold py-1 px-1 rounded'><AiFillFileAdd style={{bac: 'white'}} /></button>
			</form>
		</div>
	);
};

Todoform.propTypes = {
	submit: PropTypes.func.isRequired,
};

export default Todoform;
