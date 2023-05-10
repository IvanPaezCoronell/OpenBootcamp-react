import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	Navigate,
} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import TasksPage from './pages/tasks/TasksPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { useEffect } from 'react';

function AppRoutingOne() {
	let logged = false;

	let taskList = [
		{
			id: 1,
			name: 'task 1',
			description: 'first task'
		},
		{
			id: 2,
			name: 'task 2',
			description: 'first task'
		},
		{
			id: 3,
			name: 'task 3',
			description: 'first task'
		}
	]

	useEffect(() => {
		logged = localStorage.getItem('credentials');
		console.log('User Logged?', logged)
	},[]);

	return (
		<Router>
			<div>
				<aside>
					<Link to="/">| Home |</Link>
					<Link to="/login">| Login |</Link>
					<Link to="/about">| About |</Link>
					<Link to="/faqs">| FAQs |</Link>
					<Link to="/task">| Task |</Link>
					<Link to="/task/1">| Task 1 |</Link>
					<Link to="/task/2">| Task 2 |</Link>
				</aside>
			</div>

			<main>
				<Routes>
					{/* Public Routes */}
					<Route exact path="/" Component={HomePage} />

					<Route
						path="/login"
						element={logged ? <HomePage /> : <LoginPage />}
					/>

					<Route path="/about" Component={AboutPage} />
					<Route path="/faqs" Component={AboutPage} />

					<Route
						path="/profile"
						element={logged ? <ProfilePage /> : <Navigate to={'/login'} />}
					/>

					{/* Prrivate Routes */}
					<Route path="/task" Component={TasksPage} />
					<Route exact path="/task/:id" render= {
						({match}) => (<TaskDetailPage task={taskList[match.params.id-1]}/>)
					}>


					</Route>

					<Route path="/*" Component={NotFoundPage} />
				</Routes>
			</main>
		</Router>
	);
}
export default AppRoutingOne;
