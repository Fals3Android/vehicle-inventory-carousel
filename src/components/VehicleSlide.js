import React from 'react';
import { AnimateOnChange } from '@nearform/react-animation';
import { CarouselConsumer } from '../contexts/CarouselContext';
const styles = require('./VehicleSlide.css');

const VehicleSlide = () => {
    return <CarouselConsumer>
        { ({ currentSlides, maxSlides}) => {
                // Ensure blank slides if a set does not equal the max
                if(currentSlides.length !== maxSlides) {
                    for(let i = currentSlides.length; i < maxSlides; i++) {
                        currentSlides.push(null);
                    }
                }
                
                return currentSlides.map((slide, index) => {
                    return (slide !== null) ?
                    <AnimateOnChange key={index}>
                        <div className='vehicle-slide'>
                            <img className='vehicle-image' src={slide.thumbnailPhotoURL}/>
                            <h3 className='vehicle-title'>{slide.category} {slide.year} {slide.make} {slide.model}</h3>
                            <p className='vehicle-details'>{slide.originalTrim}</p>
                        </div>
                    </AnimateOnChange> : <AnimateOnChange key={index}>
                        <div className='empty-vehicle-slide'>
                    </div></AnimateOnChange>
                });
            }
        }
    </CarouselConsumer>
}

export default VehicleSlide;