import React from 'react';
import Data from '../services/inventory-data';

const { Provider, Consumer } = React.createContext();

class CarouselProvider extends React.Component {
    state = {
        maxSlides: 3,
        currentImageIndex: 0,
        currentPip: 0,
        slideData: [],
        currentSlides: [],
        maxPips: []
    }

    // TODO: cleanup this component will mount situation maybe do some pre-processing so as 
    // not to call setState multiple times
    async componentDidMount() {
        const inventory = await Data();
        this.setState({
            slideData: inventory.data.results   
        });
        this.setState({
            currentSlides: this.state.slideData.slice(0, this.state.maxSlides),
        });
        this.setMaxPips();
    }

    setMaxPips = () => {
        const maxFloor = Math.floor(this.state.slideData.length / this.state.maxSlides);
        let pips = new Array(maxFloor).fill(0);
        pips[0] = 1; // defaut pip

        if((this.state.slideData % this.state.maxSlides) !== 0) {
            pips.push(0);
        }

        this.setState({maxPips: pips});
    }

    //TODO: see if you can move these two methods to the Arrow consumer -> how to set state from consumer?
    previousSlide = () => {
        const { currentImageIndex, slideData, maxSlides } = this.state;
        const lastIndex = slideData.length - 1;        
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - maxSlides;
        const current = slideData.slice(index, index + maxSlides);
        
        this.setState({
            currentSlides: current,
            currentImageIndex: index
        });
    }
    
    nextSlide = () => {
        const { currentImageIndex, slideData, maxSlides } = this.state;
        const lastIndex = slideData.length - maxSlides;
        const shouldResetIndex = currentImageIndex >= lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + maxSlides;
        const current = slideData.slice(index, index + maxSlides);

        this.setState({
            currentSlides: current,
            currentImageIndex: index
        });
    }

    prevPip = () => {
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

    nextPip = () => {
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
            <Provider value={{
                ...this.state,
                setMaxPips: this.setMaxPips,
                previousSlide: this.previousSlide,
                nextSlide: this.nextSlide,
                prevPip: this.prevPip,
                nextPip: this.nextPip
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { CarouselProvider, Consumer as CarouselConsumer }