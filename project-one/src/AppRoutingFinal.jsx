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
import DashBoard from './pages/dashboard/DashBoard';
import RegisterPage from './pages/auth/RegisterPage';

function AppRoutingFinal() {
	const loggedIn = false;

	return (
		<div>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={
							loggedIn
								? <Navigate to={'/dashboard'} />
								: <Navigate to={'/login'} />
						}
					/>

					<Route
						path="/task"
						element={loggedIn ? <TasksPage /> : <Navigate to={'/login'} />}
					/>

					<Route exact path="/login" Component={LoginPage} />
					<Route exact path="/register" Component={RegisterPage} />

					<Route
						exact
						path="/dashboard"
						element={loggedIn ? <DashBoard /> : <Navigate to={'/login'} />}
					/>

					{/*Pagina no encontrada */}
					<Route path="/*" Component={NotFoundPage} />
				</Routes>
			</Router>
		</div>
	);
}
export default AppRoutingFinal;
