import React from 'react';
const styles = require('./VehicleSlide.css');
import { AnimateOnChange } from '@nearform/react-animation';
import AppContext from '../contexts/AppContext';

const VehicleSlide = () => {
    return <AppContext.Consumer>
        { (state) => {
                // Ensure blank slides if a set does not equal the max
                if(state.currentSlides.length !== state.maxSlides) {
                    for(let i = state.currentSlides.length; i < state.maxSlides; i++) {
                        state.currentSlides.push(null);
                    }
                }
                
                return state.currentSlides.map((slide, index) => {
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
    </AppContext.Consumer>
}

export default VehicleSlide;