import React from 'react';

const SubHeader = (props) => {
    return (
      <div>
        <h2 style={{
          color: 'red',
          fontSize: 20
        }}>
          Bienvenidos/as al curso de Tecnologias Emergentes
        </h2>
        <button onClick={props.onSwitchUser}>Cambiar Usuario</button>
      </div>
    );
};

export default SubHeader;