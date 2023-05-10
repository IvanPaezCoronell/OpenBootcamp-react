import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {
	const messageRef = useRef('');
	const nameRef = useRef();

	function pressBtn() {
		const text = messageRef.current.value;
		console.log(`Text in Input: ${text}`);
	}

	function pressBtnAlert(text) {
		alert(`Alerta: ${text}`);
	}

	function submitName(e) {
		e.preventDefault();
		update(nameRef.current.value);
	}

	return (
		<div style={{ background: 'blue', padding: '30px' }}>
			<p onMouseOver={() => console.log('On mouse over')}>
				Hello, {name}
			</p>
			<button onClick={() => console.log('press button 1')}>boton</button>
			<button onClick={pressBtn}>Default</button>
			<button onClick={pressBtnAlert}>Alert</button>
			<input
				placeholder="Send a text to your father"
				onFocus={() => console.log('Input Focused')}
				onChange={e => console.log('Input changed', e.target.value)}
				onCopy={() => console.log('Copy text from Input')}
				ref={messageRef}
			/>
			<button onClick={() => send(messageRef.current.value)}>
				Send Message
			</button>

			<div style={{ margin: '20px' }}>
				<form onSubmit={submitName}>
					<input ref={nameRef} type="text" placeholder="New Name" />
					<button type="submit">Update Name</button>
				</form>
			</div>
		</div>
	);
};

export default Child;
