import React from 'react';

const VehicleSlide = ({ details }) => {
    const styles = {
        border: '1px solid black',
        width: '300px',
        height: '350px',
        margin: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };
    
    return details.map((slide, index) => {
        return <div key={index} className="vehicle-slide" style={styles}>
            <img src={slide.thumbnailPhotoURL} style={{width: '100%', borderBottom: '1px solid black'}}/>
            <h3 style={{textAlign: 'center'}}>{slide.category.toUpperCase()} {slide.year} {slide.make} {slide.model}</h3>
            <p style={{textAlign: 'center', margin: '0px'}}>{slide.originalTrim}</p>
        </div>
    });
}

export default VehicleSlide;