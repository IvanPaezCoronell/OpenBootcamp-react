import { useRef } from 'react';

const UserForm = ({ onAddUser }) => {
	const name = useRef('');
	const tel = useRef('');

	function addUser(e) {
		e.preventDefault();

		const newUser = {
			name: name.current.value,
			tel: tel.current.value,
			conectado: true,
		};

		onAddUser(newUser);
		name.current.value = '';
		tel.current.value = '';
	}
	return (
		<div>
			<form onSubmit={addUser} style={{ margin: '5rem 0 5rem 0' }}>
				<h3>Agregar usuario </h3>
				<input
					ref={name}
					name="name"
					placeholder="Nombre"
					className="form-control mb-2 "
				/>
				<input
					ref={tel}
					name="tel"
					type="tel"
					placeholder="Telefono"
					className="form-control mb-2"
				/>
				<button
					onClick={addUser}
					type="submit"
					className="submit-button text-light "
					style={{ background: '#34495e' }}
				>
					Agregar
				</button>
			</form>
		</div>
	);
};

export default UserForm;
