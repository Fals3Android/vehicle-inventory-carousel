import React from 'react';

const Pips = ({ maxPips }) => {
    const styles = {
        width: '13px',
        height: '13px',
        borderRadius: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        margin: '5px'
    };

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            {
                maxPips.map((pip, i) => {
                    return <div key={i} style={styles}></div>
                })
            }
        </div>
    )
    
};

export default Pips;