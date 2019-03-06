import React from 'react';
import ReactDOM from 'react-dom';
import { CarouselProvider, CarouselConsumer } from './contexts/CarouselContext';
import Carousel from './containers/Carousel';


const Root = () => {
  return <Carousel />    
}

ReactDOM.render(
  <CarouselProvider>
    <Root />
  </CarouselProvider>, 
  document.querySelector('#root')
);