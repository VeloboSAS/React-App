import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import one from '../assets/1.jpg';
import two from '../assets/2.jpeg';
import three from '../assets/3.jpeg';




class CaruselBox extends Component {
    render() {
        const imgstyle = {
            height: '700px',
          };

        const  captionstyle = {
            color: '#00FFFF',
        //     display: 'block',
        //     marginLeft: 'auto',
        //     marginRight: 'auto',
        }  
        
        return (
            <Carousel>
                <Carousel.Item class="carousel-item active" style={imgstyle}  data-bs-interval="500">
                    <img
                    className="d-block w-100"
                    src = {one}
                    alt="FS"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: 'blue'}}>FS | Studio manicure</h3>
                        <p>Эстетика в каждом пальчике</p>
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item class="carousel-item"  data-bs-interval="500">
                    <img
                    className="d-block w-100"
                    src = {two}
                    alt="FS"
                    />
                    <Carousel.Caption>
                        <h3 >FS | Studio manicure</h3>
                        <p>Эстетика в каждом пальчике</p>
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item class="carousel-item"  data-bs-interval="500">
                    <img
                    className="d-block w-100"
                    src = {three}
                    alt="FS"
                    />
                    <Carousel.Caption>
                        <h3>FS | Studio manicure</h3>
                        <p>Эстетика в каждом пальчике</p>
                    </Carousel.Caption> 
                </Carousel.Item>
            </Carousel>


        )

    }
}

export default CaruselBox;