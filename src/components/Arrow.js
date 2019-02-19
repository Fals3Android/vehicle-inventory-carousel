import React from 'react';
const styles = require('./Arrow.css');

const Arrow = ({ direction, slideFunction, pipFunction }) => {
    function handleOnClick() {
        slideFunction();
        pipFunction();
    }

    return (
        <div
            className={ `slide-button ${direction}` }
            onClick={ handleOnClick }>
            {direction}
        </div>
    );
};

export default Arrow;