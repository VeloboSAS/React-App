import React, { useEffect } from "react";
import Fancybox from "./Fancybox.js";
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import fon from '../assets/41.jpg';
import img1 from '../assets/Works/21.jpg';
import img2 from '../assets/Works/22.jpg';
import img3 from '../assets/Works/23.jpeg';
import img4 from '../assets/Works/24.jpg';
import img5 from '../assets/Works/25.jpg';
import img6 from '../assets/Works/26.jpg';
import img7 from '../assets/Works/27.jpg';
import img8 from '../assets/Works/28.jpg';
import img9 from '../assets/Works/29.jpg';
import img10 from '../assets/Works/30.jpg';
import img11 from '../assets/Works/31.jpg';
import img12 from '../assets/Works/32.jpeg';
import img13 from '../assets/Works/33.jpg';
import img14 from '../assets/Works/34.jpg';
import img15 from '../assets/Works/35.jpg';
import img16 from '../assets/Works/36.jpg';
import img17 from '../assets/Works/37.jpg';
import img18 from '../assets/Works/38.jpg';
import img19 from '../assets/Works/39.jpg';
import img20 from '../assets/Works/40.jpg';
import img21 from '../assets/Works/41.jpg';
import img22 from '../assets/Works/42.jpg';
import img23 from '../assets/Works/43.jpeg';
import img24 from '../assets/Works/44.jpeg';
import img25 from '../assets/Works/45.jpeg';
import img26 from '../assets/Works/46.jpeg';
import img27 from '../assets/Works/47.jpeg';
import img28 from '../assets/Works/48.jpeg';
import img29 from '../assets/Works/49.jpeg';
import img30 from '../assets/Works/50.jpeg';
import img1sm from '../assets/Works/21sm.jpg';
import img2sm from '../assets/Works/22sm.jpg';
import img3sm from '../assets/Works/23sm.jpeg';
import img4sm from '../assets/Works/24sm.jpg';
import img5sm from '../assets/Works/25sm.jpg';
import img6sm from '../assets/Works/26sm.jpg';
import img7sm from '../assets/Works/27sm.jpg';
import img8sm from '../assets/Works/28sm.jpg';
import img9sm from '../assets/Works/29sm.jpg';
import img10sm from '../assets/Works/30sm.jpg';
import img11sm from '../assets/Works/31sm.jpg';
import img12sm from '../assets/Works/32sm.jpeg';
import img13sm from '../assets/Works/33sm.jpg';
import img14sm from '../assets/Works/34sm.jpg';
import img15sm from '../assets/Works/35sm.jpg';
import img16sm from '../assets/Works/36sm.jpg';
import img17sm from '../assets/Works/37sm.jpg';
import img18sm from '../assets/Works/38sm.jpg';
import img19sm from '../assets/Works/39sm.jpg';
import img20sm from '../assets/Works/40sm.jpg';
import img21sm from '../assets/Works/41sm.jpg';
import img22sm from '../assets/Works/42sm.jpg';
import img23sm from '../assets/Works/43sm.jpeg';
import img24sm from '../assets/Works/44sm.jpeg';
import img25sm from '../assets/Works/45sm.jpeg';
import img26sm from '../assets/Works/46sm.jpeg';
import img27sm from '../assets/Works/47sm.jpeg';
import img28sm from '../assets/Works/48sm.jpeg';
import img29sm from '../assets/Works/49sm.jpeg';
import img30sm from '../assets/Works/50sm.jpeg';

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
                    <p>
                    <Container className="container-fluid">
                        <Row style={{paddingTop: '2rem'}} class='row'>
                            <Col className="col-6 col-md-2" >
                                <Card  data-fancybox="gallery"   className="zoom" href={img1}>
                                    <Card.Img  src={img1sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img2}>
                                    <Card.Img src={img2sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img3}>
                                    <Card.Img src={img3sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img4}>
                                    <Card.Img src={img4sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img5}>
                                    <Card.Img src={img5sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img6}>
                                    <Card.Img src={img6sm}/> 
                                </Card>
                            </Col> 
                        </Row> 
                        <Row style={{paddingTop: '2rem'}} class='row'>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img7}>
                                    <Card.Img src={img7sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img8}>
                                    <Card.Img src={img8sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img9}>
                                    <Card.Img src={img9sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img10}>
                                    <Card.Img src={img10sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img11}>
                                    <Card.Img src={img11sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img12}>
                                    <Card.Img src={img12sm}/> 
                                </Card>
                            </Col> 
                        </Row> 
                        <Row style={{paddingTop: '2rem'}} class='row'>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img13}>
                                    <Card.Img src={img13sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img14}>
                                    <Card.Img src={img14sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img15}>
                                    <Card.Img src={img15sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img16}>
                                    <Card.Img src={img16sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img17}>
                                    <Card.Img src={img17sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img18}>
                                    <Card.Img src={img18sm}/> 
                                </Card>
                            </Col> 
                        </Row> 
                        <Row style={{paddingTop: '2rem'}} class='row'>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img19}>
                                    <Card.Img src={img19sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img20}>
                                    <Card.Img src={img20sm}/>
                                </Card>       
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img21}>
                                    <Card.Img src={img21sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img22}>
                                    <Card.Img src={img22sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img23}>
                                    <Card.Img src={img23sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img24}>
                                    <Card.Img src={img24sm}/> 
                                </Card>
                            </Col> 
                        </Row> 
                        <Row style={{paddingTop: '2rem'}} class='row'>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img25}>
                                    <Card.Img src={img25sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img26}>
                                    <Card.Img src={img26sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img27}>
                                    <Card.Img src={img27sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img28}>
                                    <Card.Img src={img28sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img29}>
                                    <Card.Img src={img29sm}/> 
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-2">
                                <Card  data-fancybox="gallery" className="zoom" href={img30}>
                                    <Card.Img src={img30sm}/> 
                                </Card>
                            </Col> 
                        </Row>  
                    </Container>
                    </p>
                </Fancybox>
            </Styles>    
        </Container>
    </>    
);
}