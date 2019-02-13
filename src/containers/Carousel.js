import React from 'react';
import VehicleSlide from '../components/VehicleSlide';
import Arrow from '../components/Arrow';
import Data from '../services/inventory-data';

const styles = {
    display: 'flex',
    justifyContent: 'center'
};

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            slideData: []
        }

        this.maxSlides = 3;
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    async componentWillMount() {
        const inventory = await Data();
        this.setState({slideData: inventory.data.results})
    }

    previousSlide() {
        const lastIndex = this.state.slideData.length - this.maxSlides;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }
    
    nextSlide() {
        const lastIndex = this.state.slideData.length - this.maxSlides;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    setMaxSlides() {
        return this.state.slideData.slice(
            this.state.currentImageIndex, 
            this.state.currentImageIndex + this.maxSlides
        );
    }
    
    render() {
        return ( 
        <div className="carousel" style={styles}>
            <Arrow direction="Prev" clickFunction={ this.previousSlide }/>
            <VehicleSlide details={ this.setMaxSlides() } />
            <Arrow direction="Next" clickFunction={ this.nextSlide }/>
        </div>
        )
    }
}

export default Carousel;