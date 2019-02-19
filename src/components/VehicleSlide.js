import React from 'react';
const styles = require('./VehicleSlide.css');

const VehicleSlide = ({ details }) => {
    return details.map((slide, index) => {
        return <div key={index} className='vehicle-slide'>
            <img className='vehicle-image' src={slide.thumbnailPhotoURL}/>
            <h3 className='vehicle-title'>{slide.category.toUpperCase()} {slide.year} {slide.make} {slide.model}</h3>
            <p className='vehicle-details'>{slide.originalTrim}</p>
        </div>
    });
}

export default VehicleSlide;