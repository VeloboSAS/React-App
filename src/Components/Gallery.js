import React, { useEffect } from "react";
import Fancybox from "./Fancybox.js";
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import fon from '../assets/41.jpg';
import Images from '../Components/Images'
import dataImg from '../Components/Data/DataImg'


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
    overflow: hidden;
    transition: 1s;
    transition: all .3s linear;
  }
    .zoom:hover img {
    transform: scale(1.05);
    transition: all .2s linear;
  }
`

export default function Gallery() {
return (
    <>       
        <Container style={fonStyles}>
            <h1 style={{display: 'flex', justifyContent: 'center', paddingTop: '4rem', color: '#D3D3D3'}}>Наши работы</h1>
            <Container style={{display: 'flex', textAlign: 'center', paddingLeft: '2rem', paddingTop: '4rem'}}>
                <p style={{fontSize: '1.8em',fontStyle: 'italic', color: '#D3D3D3'}}>
                    У нас работают талантливые  мастера, которые предложат готовые варианты маникюра или реализуют ваши идеи
                </p>
            </Container>
            <Styles>
                <Fancybox>
                    <div className="container-fluid" style={fonStyles}>
                        <div className="container py-5">
                            <div className="row" style={{paddingTop: '2rem'}}>
                                {dataImg.products.map((item, index) => {
                                    return (
                                        <Images img={item.img} imgsm={item.imgsm} key={index}/>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </Fancybox>
            </Styles>    
        </Container>
    </>    
);
}