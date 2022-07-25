import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/1.jpg';
import two from '../assets/2.jpeg';
import three from '../assets/3.jpeg';
import './Carousel.css';


const link = (
    'https://n740216.yclients.com/'
); 

export default class CaruselBox extends Component {
    render() {
        return (
            <>
                <Carousel>    
                    <Carousel.Item class="carousel-item active" className='imgstyle' data-bs-interval="500">
                        <img className="d-block w-100 opacity-100" src = {one} alt="FS" />
                        <Carousel.Caption className='textstyle'>
                            <h1>FS | Studio manicure</h1>
                            <p>Эстетика в каждом пальчике</p>
                        </Carousel.Caption> 
                        <Carousel.Caption className='btnStyle' >
                            <Button size="lg" variant="secondary" href={link}>Записаться</Button>
                        </Carousel.Caption>       
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item" className='imgstyle' data-bs-interval="500">
                        <img className="d-block w-100" src = {two} alt="FS"/>
                        <Carousel.Caption className='textstyle'> 
                            <h1>FS | Studio manicure</h1>
                            <p >Эстетика в каждом пальчике</p>
                        </Carousel.Caption>
                        <Carousel.Caption className='btnStyle'>
                            <Button size="lg"  variant="secondary" href={link}>Записаться</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item" className='imgstyle' data-bs-interval="500">
                        <img className="d-block w-100" src = {three} alt="FS"/>
                        <Carousel.Caption className='textstyle'>
                            <h1 >FS | Studio manicure</h1>
                            <p >Эстетика в каждом пальчике</p>
                        </Carousel.Caption>
                        <Carousel.Caption className='btnStyle' >
                            <Button size="lg" variant="secondary" href={link}>Записаться</Button>
                        </Carousel.Caption> 
                    </Carousel.Item>
                </Carousel>
            </>    
        );
    }
}
