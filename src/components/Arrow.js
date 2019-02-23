import React from 'react';
const styles = require('./Arrow.css');
import AppContext from '../contexts/AppContext';

const Arrow = ({ direction, slideFunction, pipFunction, setCurrentSlides }) => {
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