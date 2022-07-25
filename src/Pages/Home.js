import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import fon from '../assets/4.jpg';

const fonStyles = {
    backgroundImage: `url(${fon})`,
    
    height: '1500px',
    color: '#fff', 
    maxWidth: '100%',
    '-webkit-background-size': 'cover', 
    '-moz-background-size': 'cover', 
    '-o-background-size': 'cover', 
    backgroundSize: 'cover', 
    backgroundAttachment: 'relative',
}

class Home extends Component {
    render() {
        return (
            <div style={fonStyles}>
                < CarouselBox className="mt-5"/>
            </div>
        );
    }
}

export default Home;
