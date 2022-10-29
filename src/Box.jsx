import React from 'react';

const Box = props => {
    const children = props.children;
    return (
        <div className='container-md border border-secondary rounded my-4 overflow-hidden'>
            <div className='row'>
            {children}
            </div>
        </div>
    );
};

export default Box;