import React from 'react';

const VehicleSlide = ({ details }) => {
    const styles = {
        border: '1px solid black',
        width: '200px',
        height: '200px',
        margin: '5px'
    };
    
    return details.map((slide, index) => {
        return <div key={index} className="vehicle-slide" style={styles}>{slide}</div>
    });
}

export default VehicleSlide;