import React, { Component } from 'react';
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

class Feedback extends Component {
    render() {
        return (
            <div style={fonStyles}>
                <br/>
                <h3 className="mt-5">Feedback</h3>
            </div>
        );
    }
}

export default Feedback;

