import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import Office from './Office/Office';
import styled from 'styled-components';


// const Styles = styled.div`
//     .zoom {
//     border: 2px solid #fff;
//     // overflow: hidden;
//     // transition: 4s;
//     transition: all .4s linear;
//   }
//     .zoom:hover img {
//     transform: scale(1.05);
//     transition: all .4s linear;
//   }
// `
const About = () => {
        return (
            <>
                <Office />
                <Gallery />
            </>          
        );
    }

export default About;
