import React, { useState } from 'react'
import Child from '../pure/Child'

const Father = () => {

	const [name, setName] = useState(' ');

	function showMessage(text){
		alert(`Message recived: ${text}`)

	}

	function updateName( newName){
		setName(newName)
		
	}
	return (
		<div style={{background: 'tomato' , padding:'12px'}}>
			<Child name={name} send={showMessage} update={updateName}/>
			
		</div>
	)
}

export default Father
