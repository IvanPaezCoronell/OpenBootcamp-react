import { useEffect, useState } from 'react'

const Clock = () => {

    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Ivan',
        apellido: 'Paez Coronell'
    }

    const [data, setData] = useState(defaultState);

    useEffect( () => {
        const intervalID = setInterval(() => {
            updateData();
        },1000);

        return () => {
            clearInterval(intervalID)
        };
    }
);


const updateData = () => {
    return setData({
        fecha: data.fecha,
        edad: data.edad +1,
        nombre: data.nombre,
        apellido: data.apellido
    })
}


  return (
    <>

    <h1>Hora: {data.fecha.toLocaleTimeString()}</h1>
    <h3>{data.nombre} {data.apellido}</h3>
    <h3>Edad: {data.edad}</h3>
      
    </>
  )
}

export default Clock
