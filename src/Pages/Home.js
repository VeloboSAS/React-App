import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import Services from './Services';
import About from './About';
import Button from 'react-bootstrap/Button';
import fon from '../assets/4.jpg';

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox  className="mt-5"/>
                <About />
                <Services/>
            </>    
        );
    }
}

export default Home;
