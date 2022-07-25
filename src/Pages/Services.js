import React, { Component } from 'react';
import { Container} from "react-bootstrap";
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


class Services extends Component {
    render() {
        return (
                <div style={fonStyles}>
                    <br/>
                    <h3 className="mt-5"> Services </h3>
                </div>

        );
    }
}

export default Services;

