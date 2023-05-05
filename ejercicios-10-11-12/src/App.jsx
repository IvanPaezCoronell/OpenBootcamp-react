import { useState } from 'react';
import './App.css';

function App() {
	const [color, setColor] = useState('black');
	const [intervalo, setIntervalo] = useState(0);

	function generateNum(num) {
		return (Math.random() * num).toFixed(0);
	}

	function generateColor() {
		const colorRgb = `(${generateNum(255)}, ${generateNum(255)}, ${generateNum(255)})`;
		return setColor(`rgb${colorRgb}`);
	}

	const changeColor = () => {
		return setIntervalo(setInterval(generateColor, 200));
	};

	const stopColorChange = () => {
		return clearInterval(intervalo);
	};

	const dblClikStop = () => {
		return clearInterval(intervalo);
	};

	return (
		<div
			onMouseOver={changeColor}
			onMouseLeave={stopColorChange}
			onDoubleClick={dblClikStop}
			style={{
				width: '255px',
				height: '255px',
				backgroundColor: color,
			}}
		/>
	);
}

export default App;
