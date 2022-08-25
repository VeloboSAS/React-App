import React, { useState } from "react";
import Fancybox from "./Fancybox.js";
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import Images from "./images";
import fon from '../assets/41.jpg';
import "./style.css";

const fonStyles = {
    background: `url(${fon})`,
    height: 'auto',
    color: '#fff', 
    maxWidth: '100%',
    '-webkit-background-size': 'cover', 
    '-moz-background-size': 'cover', 
    '-o-background-size': 'cover', 
    backgroundSize: 'cover', 
    backgroundAttachment: 'relative',
    paddingTop: '2rem',
    paddingBottom: '2rem',
};

const Styles = styled.div`
    .zoom {
    border: 1px solid #fff;
    // overflow: hidden;
    // transition: 1s;
    transition: all .3s linear;
  }
    .zoom:hover img {
    transform: scale(1.15);
    transition: all .2s linear;
  }
`

export default function Gallery() {
    const [selectedImg, setSelectedImg] = useState(Images[0])

    return (
        <>       
            <Container style={fonStyles}>
                <h1 style={{display: 'flex', justifyContent: 'center', paddingTop: '4rem', color: '#D3D3D3'}}>Наши работы</h1>
                <Container style={{display: 'flex', textAlign: 'center', paddingLeft: '2rem', paddingTop: '4rem'}}>
                    <p style={{fontSize: '1.8em',fontStyle: 'italic', color: '#D3D3D3'}}>
                        У нас работают талантливые  мастера, которые предложат готовые варианты маникюра или реализуют ваши идеи
                    </p>
                </Container>
                {/* <Styles> */}
                    <div className="App">
                        <div className="container">
                            <img src={selectedImg} alt="Selected" className="selected" />
                            <div className="imgContainer">
                                {Images.map((img, index) => (
                                    <img 
                                        style={{border: selectedImg === img ? "4px solid purple" : ""}}
                                        key={index}
                                        src={img}
                                        onClick = {() => setSelectedImg(img)}
                                    />    
                                ))}
                            </div>
                        </div>
                    </div>            
                {/* </Styles>     */}
            </Container>
        </>    
    );
}