import React, { useState } from "react";

const Greeting = ({ nombre }) => {
    const [edad, setedad] = useState(23);

    const cumple = () => {
        setedad(edad + 1);
    };

    return (
        <div>
            <h1>Hola {nombre}</h1>
            <h5>{edad}</h5>
            <button onClick={cumple}>aumentar</button>
        </div>
    );
};

export default Greeting;
