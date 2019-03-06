import React from 'react';
import VehicleSlide from '../components/VehicleSlide';
import Arrow from '../components/Arrow';
import Pips from '../components/Pips';
import { CarouselConsumer } from '../contexts/CarouselContext';
const styles = require('./Carousel.css');

const Carousel = () => {
    return <CarouselConsumer> 
    {
        ({previousSlide, prevPip,nextSlide,nextPip,maxPips,currentPip}) => {
            return <div className="carousel">
                <Arrow direction="Prev" 
                    slideFunction={ previousSlide } pipFunction={prevPip}
                />
                <VehicleSlide />
                <Arrow direction="Next" 
                    slideFunction={ nextSlide } pipFunction={nextPip}
                />
                <Pips maxPips={ maxPips } currentPip={ currentPip }/>
            </div>
            
        }
    }
    </CarouselConsumer>
}
            
export default Carousel;