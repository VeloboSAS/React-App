import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import fon from '../assets/41.jpg';
import twone from '../assets/Works/21.jpg';
import twtwo from '../assets/Works/22.jpg';
import twthree from '../assets/Works/23.jpg';
import twfour from '../assets/Works/24.jpg';
import twfive from '../assets/Works/25.jpg';
import twsex from '../assets/Works/26.jpg';
import twseven from '../assets/Works/27.jpg';
import tweight from '../assets/Works/28.jpg';
import twnine from '../assets/Works/29.jpg';
import th from '../assets/Works/30.jpg';
import thone from '../assets/Works/31.jpg';
import thtwo from '../assets/Works/32.jpg';
import ththree from '../assets/Works/33.jpg';
import thfour from '../assets/Works/34.jpg';
import thfive from '../assets/Works/35.jpg';
import thsex from '../assets/Works/36.jpg';


const fonStyles = {
    background: `url(${fon})`,
    
    height: '1400px',
    color: '#fff', 
    maxWidth: '100%',
    '-webkit-background-size': 'cover', 
    '-moz-background-size': 'cover', 
    '-o-background-size': 'cover', 
    backgroundSize: 'cover', 
    backgroundAttachment: 'relative',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    // paddingLeft: '2rem',
    // paddingRight: '2rem',

};

const Styles = styled.div`
    .zoom {
    border: 1px solid #fff;
    // overflow: hidden;
    // transition: 1s;
    transition: all .3s linear;
  }
    .zoom:hover img {
    transform: scale(1.25);
    transition: all .2s linear;
  }
`


class OurWorks extends Component {
    render() {
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
                            <Row style={{paddingTop: '2rem'}} class='row'>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img  variant='top'  src={twone}/> 
                                    </Card>

                                </Col>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img variant='top' src={twtwo}/>       
                                    </Card>
                                </Col>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img  variant='top' src={twthree}/>      
                                    </Card>
                                </Col>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img   variant='top' src={twfour}/>     
                                    </Card>
                                </Col>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img  variant='top' src={twfive}/>     
                                    </Card>
                                </Col>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img  variant='top' src={twsex}/>     
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{paddingTop: '2rem'}} className="row">
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img  variant='top' src={twseven}/>   
                                    </Card>
                                </Col>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img variant='top' src={tweight}/>       
                                    </Card>
                                </Col>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img variant='top' src={twnine}/>      
                                    </Card>
                                </Col>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img variant='top' src={thone}/>     
                                    </Card>
                                </Col>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img variant='top' src={thtwo}/>     
                                    </Card>
                                </Col>
                                <Col className="col-sm-2">
                                    <Card style={{width: '13rem'}} className="zoom">
                                        <Card.Img variant='top' src={ththree}/>     
                                    </Card>
                                </Col>
                            </Row>
                        </Styles>
                        </Container> 
                </>
                      
        );
    }
}

export default OurWorks;