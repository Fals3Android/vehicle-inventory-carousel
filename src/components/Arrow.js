import React from 'react';

const Arrow = ({ direction, clickFunction }) => {
    const styles = {
        alignSelf: 'center',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: 'black',
        padding: '15px'
    };

    return (
        <div
            className={ `slide-arrow ${direction}` }
            style={styles}
            onClick={ clickFunction }>
            {direction}
        </div>
    );
};

export default Arrow;