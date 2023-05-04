const UserList = ({ user, remove, changeState }) => {
	return (
		<div className="row card mb-5">
			<h5>
				{user.name}
			</h5>
			<h5>
				tel. {user.tel}
			</h5>

			<button
				style={{ backgroundColor: user.status ? '#27ae60' : 'gray' }}
				className="state-butto text-light mb-3 mt-3"
				onClick={() => {
					changeState(user);
				}}
			>
				{user.status ? 'Conectado' : 'Desconectado'}
			</button>

			<button
				className="remove-button text-light bg-danger"
				onClick={() => remove(user)}
			>
				Borrar
			</button>
		</div>
	);
};

export default UserList;
