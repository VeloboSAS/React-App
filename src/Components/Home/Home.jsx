import React, { Component } from 'react';
import CarouselBox from '../CarouselBox/CarouselBox';
import Services from '../Services/Services';
import Pedicure from '../Services/ServicesPages/Pedicure';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';


class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox  className="mt-5"/>
                <About />
                <Services />
                <Pedicure />
                <Contacts />
            </>    
        );
    }
}

export default Home;
