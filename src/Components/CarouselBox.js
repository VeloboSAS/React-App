import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/1.jpg';
import two from '../assets/2.jpeg';
import three from '../assets/3.jpeg';


class CaruselBox extends Component {
    render() {
        const imgstyle = {
            height: '700px',
            opacity: '1.5',
          };

        const  captionstyle = {
            color: '#D3D3D3',
            fontSize: '2.5em',
            fontStyle: 'italic',
        }
        
        return (
            // <Container>
                <Carousel >
                    <Carousel.Item class="carousel-item active" style={imgstyle}  data-bs-interval="500">
                        <img
                        className="d-block w-100"
                        src = {one}
                        alt="FS"
                        />
                        <Carousel.Caption >
                            <h1 >FS | Studio manicure</h1>
                            <p>Эстетика в каждом пальчике</p>
                        </Carousel.Caption> 
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item" style={imgstyle}  data-bs-interval="500">
                        <img
                        className="d-block w-100"
                        src = {two}
                        alt="FS"
                        />
                        <Carousel.Caption style={captionstyle}>
                            <h1>FS | Studio manicure</h1>
                            <p>Эстетика в каждом пальчике</p>
                        </Carousel.Caption> 
                    </Carousel.Item>
                    <Carousel.Item class="carousel-item" style={imgstyle}  data-bs-interval="500">
                        <img
                        className="d-block w-100"
                        src = {three}
                        alt="FS"
                        />
                        <Carousel.Caption style={captionstyle}>
                            <h1>FS | Studio manicure</h1>
                            <p>Эстетика в каждом пальчике</p>
                        </Carousel.Caption> 
                    </Carousel.Item>
                </Carousel>
            // </Container>


        )

    }
}

export default CaruselBox;