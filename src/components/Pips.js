import React from 'react';
const styles = require('./Pips.css');

const Pips = ({ maxPips }) => {
    return (
        <div className='pip-container'>
            {
                maxPips.map((pip, i) => {
                    return (pip) ? <div key={i} className='selected-pip pip'></div> : 
                        <div key={i} className='not-selected-pip pip'></div> 
                })
            }
        </div>
    )
    
};

export default Pips;