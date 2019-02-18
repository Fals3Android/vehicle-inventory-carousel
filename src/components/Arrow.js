import React from 'react';

const Arrow = ({ direction, slideFunction, pipFunction }) => {
    const styles = {
        alignSelf: 'center',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: 'black',
        padding: '15px'
    };

    function handleOnClick() {
        slideFunction();
        pipFunction();
    }

    return (
        <div
            className={ `slide-arrow ${direction}` }
            style={styles}
            onClick={ handleOnClick }>
            {direction}
        </div>
    );
};

export default Arrow;