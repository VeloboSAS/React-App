import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import thirteen from '../../../assets/Office/13.jpeg';
import fourteen from '../../../assets/Office/14.jpeg';
import fiveteen from '../../../assets/Office/15.jpeg';
import sexteen from '../../../assets/Office/16.jpeg';
import seventeen from '../../../assets/Office/17.jpeg';
import eighteen from '../../../assets/Office/18.jpeg';
import nineteen from '../../../assets/Office/19.jpeg';
import tventy from '../../../assets/Office/20.jpeg';
import c from './Office.module.css';


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
const Office = () => {
        return (
            <>
                <Container>
                    <h1 className={c.title}>Студия маникюра</h1>
                    <Container style={{display: 'flex', textAlign: 'center', paddingLeft: '2rem', paddingTop: '4rem'}}>
                        <p style={{fontSize: '1.5em',fontStyle: 'italic', color: '#D3D3D3'}}>
                            FS | Studio manicure- это новая студия маникюра, где ты получишь не только качественную услугу,
                            но и настоящий relax ❤

                            ▪️ Мы за стиль и творчество, за качество и безопасность
                            ▪️ У нас огромный выбор дизайнов и цветов
                            ▪️ Мы любим креатив и воплотим любую идею.

                            От нас уходят красивыми и счастливыми ❤
                        </p>
                    </Container>
                    <Styles>
                        <Container className="container-fluid">
                            <Row style={{paddingTop: '4rem'}}>
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
            </>          
        );
    }


export default Office;
