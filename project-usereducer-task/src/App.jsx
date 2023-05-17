import './App.css';
import { AppProvider } from './AppProvider';
import FilterOptions from './components/FilterOptions';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
	return (
		<AppProvider>
			<div className="container card mt-5">
				<div className="card-header">Task App</div>
				<div className="card-body">
					<TaskForm />
					<TaskList />
					<FilterOptions />
				</div>
			</div>
		</AppProvider>
	);
}

export default App;
