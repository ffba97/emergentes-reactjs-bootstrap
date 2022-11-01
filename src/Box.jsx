import React from 'react';

const Box = props => {
    const children = props.children;
    return (
        <div className='container'>
            <div className='row'>
            {children}
            </div>
        </div>
    );
};

export default Box;