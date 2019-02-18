import React from 'react';

const Pips = ({ maxPips }) => {
    const otherPip = {
        width: '13px',
        height: '13px',
        borderRadius: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        margin: '5px'
    };

    const currentPip = {
        width: '13px',
        height: '13px',
        borderRadius: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)',
        margin: '5px'
    };
    
    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            {
                maxPips.map((pip, i) => {
                    return (pip) ? <div key={i} style={currentPip}></div> : <div key={i} style={otherPip}></div> 
                })
            }
        </div>
    )
    
};

export default Pips;