import React from 'react';

const Header = (props) => {

    const user = props.user;
    const kindGreeting = props.kindGreeting;

    const formatName = (user) => {
        return user.lastName + ', ' + user.firstName;
    };

    if (user) {
        return <h1>{kindGreeting ? "Muy Bienvenido/a" : "Hola"} {formatName(user)}</h1>;
    } else {
        return <h1 className='blueHeader'>{kindGreeting ? "Muy Bienvenido/a" : "Hola"} Invitado/a</h1>;
    }
};

export default Header;