import React from 'react';
import VehicleSlide from '../components/VehicleSlide';
import Arrow from '../components/Arrow'

const slideContent = [
    'test-1',
    'test-2',
    'test-3',
    'test-4',
    'test-5',
    'test-6'
];

const styles = {
    display: 'flex'
};

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = slideContent.length - 3;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }
    
    nextSlide() {
        const lastIndex = slideContent.length - 3;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }
    
    render() {
        return ( 
        <div className="carousel" style={styles}>
            <Arrow
            direction="Prev"
            clickFunction={ this.previousSlide }
            />

            <VehicleSlide 
                details={ slideContent.slice(this.state.currentImageIndex, this.state.currentImageIndex + 3) } 
            />

            <Arrow
            direction="Next"
            clickFunction={ this.nextSlide }
            />
        </div>
        )
    }
}

export default Carousel;