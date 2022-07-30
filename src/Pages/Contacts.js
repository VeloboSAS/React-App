import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { YMaps, Map, Placemark, FullscreenControl, TypeSelector, ZoomControl } from 'react-yandex-maps';
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

class ContactMap extends Component {
    render () {
        return (
            <Container style={fonStyles} >
                 <Row style={{paddingTop: '6rem'}} class='row'>
                     <Col className="col-md-4" >
                         <div>
                            <h1>
                                 Контакты
                            </h1>
                            <p>
                            Ярославль, ул.Спартаковская, д.25
                            Время работы: ежедневно с 10.00 до 20.00


                            </p>
                        </div>    
                    </Col>   
                     <Col className="col-md-8" > 
                     <Container>
                        <YMaps >
                            <Map style={{width: '100%', height: '400px'}}  state={{ center: [57.72246759681061,39.824911271890244], zoom: 17 }}>
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
                                <FullscreenControl options={{float: 'left'}}/>
                                <TypeSelector options={{float: 'right'}}/>
                                <ZoomControl options={{float: 'left'}}/>

                            </Map>
                        </YMaps>
                    </Container>
                    </Col> 
                </Row> 
            </Container>              
        );
    }
}
export default ContactMap;