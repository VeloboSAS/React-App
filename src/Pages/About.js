import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import OurWorks from '../Components/OurWorks';
import styled from 'styled-components';
import fon from '../assets/41.jpg';
import thirteen from '../assets/13.jpeg';
import fourteen from '../assets/14.jpeg';
import fiveteen from '../assets/15.jpeg';
import sexteen from '../assets/16.jpeg';
import seventeen from '../assets/17.jpeg';
import eighteen from '../assets/18.jpeg';
import nineteen from '../assets/19.jpeg';
import tventy from '../assets/20.jpeg';



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
    paddingLeft: '2rem',
    paddingRight: '2rem',

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


class About extends Component {
    render() {
        return (
            <>
                <Container style={fonStyles} className="img-responsive">
                    <h1 style={{display: 'flex', justifyContent: 'center', paddingTop: '4rem', color: '#D3D3D3'}}>Студия маникюра</h1>
                    <Container style={{display: 'flex', textAlign: 'center', paddingLeft: '2rem', paddingTop: '4rem'}}>
                        <p style={{fontSize: '1.5em',fontStyle: 'italic', color: '#D3D3D3'}}>
                        FS | Studio manicure- это новая студия маникюра, где ты получишь не только качественную услугу,
                        но и настоящий relax🖤

                        ▪️ Мы за стиль и творчество, за качество и безопасность
                        ▪️ У нас огромный выбор дизайнов и цветов
                        ▪️ Мы любим креатив и воплотим любую идею.

                        От нас уходят красивыми и счастливыми🖤
                        </p>
                    </Container>
                    <Styles>
                    <Container className="container-fluid">
                            <Row style={{paddingTop: '2rem'}}>
                                <Col className="col-6 col-lg-3">
                                    <Card className="zoom img-fluid">
                                        <Card.Img  variant='top' src={thirteen}/>   
                                    </Card>
                                </Col>
                                <Col className="col-6 col-lg-3">
                                    <Card  className="zoom img-fluid">
                                        <Card.Img variant='top' src={fourteen}/>       
                                    </Card>
                                </Col>
                                <Col className="col-6 col-lg-3">
                                    <Card  className="zoom img-fluid">
                                        <Card.Img variant='top' src={fiveteen}/>      
                                    </Card>
                                </Col>
                                <Col className="col-6 col-lg-3">
                                    <Card  className="zoom img-fluid">
                                        <Card.Img variant='top' src={sexteen}/>     
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{paddingTop: '2rem'}}>
                                <Col className="col-6 col-lg-3">
                                    <Card  className="zoom img-fluid">
                                        <Card.Img variant='top' src={seventeen} />   
                                    </Card>
                                </Col>
                                <Col className="col-6 col-lg-3">
                                    <Card className="zoom img-fluid">
                                        <Card.Img variant='top' src={eighteen} />       
                                    </Card>
                                </Col>
                                <Col className="col-6 col-lg-3">
                                    <Card  className="zoom img-fluid">
                                        <Card.Img variant='top' src={nineteen} />      
                                    </Card>
                                </Col>
                                <Col className="col-6 col-lg-3">
                                    <Card  className="zoom img-fluid">
                                        <Card.Img variant='top' src={tventy} />     
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Styles>
                </Container>
                    <OurWorks />
            </>
                      
        );
    }
}

export default About;
