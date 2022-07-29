import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import fon from '../assets/4.jpg';
import difficult from '../assets/5.jpg';
import simple from '../assets/6.jpg';
import correction from '../assets/7.jpg';
import remove from '../assets/8.jpg';
import without from '../assets/9.jpg';
import fpench from '../assets/10.jpg';
import build from '../assets/11.jpg';
import mono from '../assets/12.jpg';


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
};

export default class Services extends Component {
    render() {
        return (
            <>
                    <Container style={fonStyles}>
                        <h1 style={{display: 'flex', justifyContent: 'center', paddingTop: '4rem'}}>Наши Услуги</h1>
                        <Row style={{paddingTop: '3rem'}} >
                            <Col className="col-6 col-md-3">
                                <Card style={{width: '18rem', backgroundColor: '#DCDCDC', borderRadius: '10%'}} >
                                    <Card.Img  src={difficult} style={{borderRadius: '10% 10% 0% 0%'}} />
                                    <Card.Body>
                                        <Card.Title style={{color: 'black', display: 'flex', justifyContent: 'center'}}>Сложный дизайн</Card.Title>
                                        <br/>
                                        <Button style={{display: 'block', margin: '0 auto'}} variant='secondary'>Записаться</Button>
                                    </Card.Body>    
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-3">
                                <Card style={{width: '18rem', backgroundColor: '#DCDCDC', borderRadius: '10%'}}>
                                    <Card.Img variant='top' src={simple} style={{borderRadius: '10% 10% 0% 0%'}}/>
                                    <Card.Body>
                                        <Card.Title style={{color: 'black', display: 'flex', justifyContent: 'center'}}>Простой дизайн</Card.Title>
                                        <br/>
                                        <Button variant="secondary" style={{display: 'block', margin: '0 auto'}}>Записаться</Button>
                                    </Card.Body>       
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-3">
                                <Card style={{width: '18rem', backgroundColor: '#DCDCDC', borderRadius: '10%'}}>
                                    <Card.Img variant='top' src={correction} style={{borderRadius: '10% 10% 0% 0%'}}/>
                                    <Card.Body>
                                        <Card.Title style={{color: 'black', textAlight: 'center'}}>Коррекция + окрашивание краской</Card.Title>
                                        <Button style={{display: 'block', margin: '0 auto'}} variant='secondary'>Записаться</Button>
                                    </Card.Body>       
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-3">
                                <Card style={{width: '18rem', backgroundColor: '#DCDCDC', borderRadius: '10%'}}>
                                    <Card.Img variant='top' src={remove} style={{borderRadius: '10% 10% 0% 0%'}}/>
                                    <Card.Body>
                                        <Card.Title style={{color: 'black', display: 'flex', justifyContent: 'center'}}>Снятие покрытия</Card.Title>
                                        <br/>
                                        <Button  style={{display: 'block', margin: '0 auto'}} variant='secondary'>Записаться</Button>
                                    </Card.Body>       
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{paddingTop: '2rem'}}>
                            <Col className="col-6 col-md-3">
                                <Card style={{width: '18rem', backgroundColor: '#DCDCDC', borderRadius: '10%'}}>
                                    <Card.Img variant='top' src={without} style={{borderRadius: '10% 10% 0% 0%'}}/>
                                    <Card.Body>
                                        <Card.Title style={{color: 'black', display: 'flex', justifyContent: 'center'}}>Маникюр без покрытия</Card.Title>
                                        <br/>
                                        <Button style={{display: 'block', margin: '0 auto'}} variant='secondary'>Записаться</Button>
                                    </Card.Body>    
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-3">
                                <Card style={{width: '18rem', backgroundColor: '#DCDCDC', borderRadius: '10%'}}>
                                    <Card.Img variant='top' src={fpench}style={{borderRadius: '10% 10% 0% 0%'}} />
                                    <Card.Body>
                                        <Card.Title style={{color: 'black', textAlight: 'center'}}>Маникюр с покрытием + френч/градиент</Card.Title>
                                        <Button style={{display: 'block', margin: '0 auto'}} variant='secondary'>Записаться</Button>
                                    </Card.Body>       
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-3">
                                <Card style={{width: '18rem', backgroundColor: '#DCDCDC', borderRadius: '10%'}}>
                                    <Card.Img variant='top' src={build} style={{borderRadius: '10% 10% 0% 0%'}}/>
                                    <Card.Body>
                                        <Card.Title style={{color: 'black', display: 'flex', justifyContent: 'center'}}>Наращивание ногтей</Card.Title>
                                        <br/>
                                        <Button style={{display: 'block', margin: '0 auto'}} variant='secondary'>Записаться</Button>
                                    </Card.Body>       
                                </Card>
                            </Col>
                            <Col className="col-6 col-md-3">
                                <Card style={{width: '18rem', backgroundColor: '#DCDCDC', borderRadius: '10%'}}>
                                    <Card.Img variant='top' src={mono} style={{borderRadius: '10% 10% 0% 0%'}}/>
                                    <Card.Body>
                                        <Card.Title style={{color: 'black', display: 'flex', justifyContent: 'center'}}>Маникюр с однотонным покрытием</Card.Title>
                                        <Button style={{display: 'block', margin: '0 auto'}} variant='secondary'>Записаться</Button>
                                    </Card.Body>       
                                </Card>
                            </Col>
                        </Row>
                    </Container> 
                </>      
        );
    }
}






