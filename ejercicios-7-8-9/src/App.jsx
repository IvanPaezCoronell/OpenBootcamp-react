import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
	const dataUser = [
		{ name: 'Ivan', tel: '3013030072', status: true },
		{ name: 'Maria', tel: '3238763891', status: true },
		{ name: 'David', tel: '30237256224', status: false },
	];
	const [newUser, setNewUser] = useState(dataUser);

	function changeState(user) {
		const index = newUser.indexOf(user);
		const tempUser = [...newUser];

		tempUser[index].status = !tempUser[index].status;
		setNewUser(tempUser);
	}

	function remove(user) {
		const index = newUser.indexOf(user);
		const tempUser = [...newUser];
		tempUser.splice(index, 1);
		setNewUser(tempUser);
	}

	function addUser(user) {
		const tempUser = [...newUser];
		tempUser.push(user);
		setNewUser(tempUser);
	}

	return (
		<div className='row p-12 m-12'>
			<UserForm onAddUser={addUser} />
			<div className="App">
				

				<div className=" m-3 p-12">
					{newUser.map((user, index) => {
						return (
							<UserList 
								key={index}
								user={user}
								changeState={changeState}
								remove={remove}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
