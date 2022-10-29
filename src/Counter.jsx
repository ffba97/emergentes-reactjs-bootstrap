import React, { useEffect, useState } from 'react';

const Counter = () => {
    // Creamos un estado con valor inicial 0
    // y obtenemos el lector y el modificador
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value !== 0) {
            console.log('El valor despues de la modificacion es ', value);
        }
    }, [value]);

    const increment = () => {
        console.log('Incrementar');
        // Generamos el nuevo valor
        const newValue = value + 1;
        console.log('El valor antes de la modificacion es ', value);
        // Actualizamos el estado al nuevo valor
        setValue(newValue);
    };

    return (
        <div>
            <h3>El valor actual es {value}</h3>
            <button onClick={increment}>Agregar</button>
        </div>
    );
};

export default Counter;