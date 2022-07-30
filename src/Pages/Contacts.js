import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Container, Row, Col} from 'react-bootstrap';
import fon from '../assets/4.jpg';

const fonStyles = {
    backgroundImage: `url(${fon})`,
    
    height: 'auto',
    color: '#fff', 
    maxWidth: '100%',
    '-webkit-background-size': 'cover', 
    '-moz-background-size': 'cover', 
    '-o-background-size': 'cover', 
    backgroundSize: 'cover', 
    backgroundAttachment: 'relative',

}


// const mapState = { center: [55.76, 37.64], zoom: 10 };


class ContactMap extends Component {
    render () {
        return (
            <Container style={fonStyles}>
                 <Row style={{paddingTop: '6rem'}} class='row'>
                     <Col className="col-6 col-md-4" >
                         <div>
                            <h1>
                                 Контакты
                            </h1>
                        </div>    
                    </Col>  
                    <Col className="col-6 col-md-8" > 
                        <YMaps style={{widht: '700px', heigth: 'auto'}}>
                            <Map  state={{ center: [57.72246759681061,39.824911271890244], zoom: 17 }}>
                                <Placemark
                                    geometry={[57.72246759681061,39.824911271890244]
                                    }
                                    properties={{
                                    hintContent: 'Собственный значок метки',
                                    balloonContent: 'Это красивая метка'
                                    }}
                                    // options={{
                                    // iconLayout: 'default#image',
                                    // iconImageHref: 'images/myIcon.gif',
                                    // iconImageSize: [30, 42],
                                    // iconImageOffset: [-3, -42]
                                    // }}
                                />

                            </Map>
                        </YMaps>
                    </Col> 
                </Row> 
            </Container>              
        );
    }
}
export default ContactMap;