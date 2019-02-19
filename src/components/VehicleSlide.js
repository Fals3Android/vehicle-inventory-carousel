import React from 'react';
const styles = require('./VehicleSlide.css');
import { AnimateOnChange } from '@nearform/react-animation';

const VehicleSlide = ({ slides, maxSlides }) => {
    // Ensure blank slides if a set does not equal the max
    if(slides.length !== maxSlides) {
        for(let i = slides.length; i < maxSlides; i++) {
            slides.push(null);
        }
    }
    
    return slides.map((slide, index) => {
        return (slide !== null) ?
        <AnimateOnChange key={index}>
            <div className='vehicle-slide'>
                <img className='vehicle-image' src={slide.thumbnailPhotoURL}/>
                <h3 className='vehicle-title'>{slide.category.toUpperCase()} {slide.year} {slide.make} {slide.model}</h3>
                <p className='vehicle-details'>{slide.originalTrim}</p>
            </div>
        </AnimateOnChange> : <AnimateOnChange key={index}>
            <div className='empty-vehicle-slide'>
        </div></AnimateOnChange>
    });
}

export default VehicleSlide;