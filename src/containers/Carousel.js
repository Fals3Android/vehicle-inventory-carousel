import React from 'react';
import VehicleSlide from '../components/VehicleSlide';
import Arrow from '../components/Arrow';
import Data from '../services/inventory-data';
import Pips from '../components/Pips';
const styles = require('./Carousel.css');

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            currentPip: 0,
            slideData: [],
            maxPips: []
        }

        this.maxSlides = 3;
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.prevPip = this.prevPip.bind(this);
        this.nextPip = this.nextPip.bind(this);
    }

    async componentWillMount() {
        const inventory = await Data();
        this.setState({slideData: inventory.data.results})
        this.setMaxPips();
    }

    previousSlide() {
        const lastIndex = this.state.slideData.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - this.maxSlides;

        this.setState({
            currentImageIndex: index
        });
    }
    
    nextSlide() {
        const lastIndex = this.state.slideData.length - this.maxSlides;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex >= lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + this.maxSlides;

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

    setMaxPips() {
        const maxFloor = Math.floor(this.state.slideData.length / this.maxSlides);
        let pips = new Array(maxFloor).fill(0);
        pips[0] = 1; // defaut pip

        if((this.state.slideData % this.maxSlides) !== 0) {
            pips.push(0);
        }

        this.setState({maxPips: pips});
    }

    prevPip() {
        const prevPip = this.state.currentPip - 1;
        const pipArray = new Array(this.state.maxPips.length).fill(0);
        if(prevPip < 0) {
            pipArray[this.state.maxPips.length - 1] = 1;    
            this.setState({maxPips: pipArray});
            return this.setState({currentPip: this.state.maxPips.length - 1});
        }
        pipArray[prevPip] = 1;
        this.setState({maxPips: pipArray});
        this.setState({currentPip: prevPip});
    }

    nextPip() {
        const nextPip = this.state.currentPip + 1;
        const pipArray = new Array(this.state.maxPips.length).fill(0);
        if(nextPip >= this.state.maxPips.length) {
            pipArray[0] = 1;    
            this.setState({maxPips: pipArray});
            return this.setState({currentPip: 0});
        }
        pipArray[nextPip] = 1;
        this.setState({maxPips: pipArray});
        this.setState({currentPip: nextPip});
        
    }
    
    render() {
        return ( 
        <div className="carousel">
            <Arrow direction="Prev" slideFunction={ this.previousSlide } pipFunction={this.prevPip}/>
            <VehicleSlide details={ this.setMaxSlides() } />
            <Arrow direction="Next" slideFunction={ this.nextSlide } pipFunction={this.nextPip}/>
            <Pips maxPips={ this.state.maxPips } currentPip={ this.state.currentPip }/>
        </div>
        )
    }
}

export default Carousel;