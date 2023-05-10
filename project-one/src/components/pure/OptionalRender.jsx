import React, { useState } from 'react';

const loggedStyle = {
	color: 'white',
	fontWeight: 'bold',
	backgroundColor: 'tomato',
};

const unloggedStyle = {
	color: 'white',
	fontWeight: 'bold',
	backgroundColor: 'green',
};

const LoginBtn = ({ loginAction, propStyle }) => {
	return (
		<button style={propStyle} onClick={loginAction}>
			Login
		</button>
	);
};

const LogoutBtn = ({ logoutAction, propStyle }) => {
	return (
		<button style={propStyle} onClick={logoutAction}>
			Logout
		</button>
	);
};

const OptionalRender = () => {
	const [access, setAccess] = useState(false);
	const [message, setMessage] = useState(1);

	// const updateAccess = () => {
	// 	setAccess(!access)
	// }

	const loginAction = () => {
		setAccess(true);
	};

	const logoutAction = () => {
		setAccess(false);
	};

	let optionalBtn;

	if (access) {
		optionalBtn = (
			<LogoutBtn propStyle={loggedStyle} logoutAction={logoutAction} />
		);
	} else {
		optionalBtn = (
			<LoginBtn propStyle={unloggedStyle} loginAction={loginAction} />
		);
	}

	// unread message
	let addMessages = () => {
		setMessage(message + 1);
	};

	return (
		<div>
			{optionalBtn}

			{access
				? <div>
						{message > 0
							? <p>
									You have {message} new message{message > 1 ? 's' : null}...
								</p>
							: <p>There are no messages</p>}
					</div>
				: null}

			<button onClick={addMessages}>
				{message === 0 ? 'Add your first message' : 'Add new message'}
			</button>
		</div>
	);
};

export default OptionalRender;
