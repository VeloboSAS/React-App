import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { YMaps, Map, Placemark, FullscreenControl, TypeSelector, ZoomControl } from 'react-yandex-maps';
import { Container, Row, Col} from 'react-bootstrap';
import fon from '../assets/4.jpg';
import './pages.css'

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
                    <Row style={{paddingTop: '8rem', paddingBottom: '2rem',}} class='row'>
                        <Col className="col-md-4" style={{padding: '2rem'}}>
                            <div>
                                <h1>Контакты</h1>
                                <p style={{fontSize: '1.3em'}}>
                                Ярославль, ул.Спартаковская, 
                                <br/>
                                Время работы: ежедневно с 10.00 до 20.00
                                <br/>
                                Тел. 8
                                </p>
                                <div style={{paddingTop: '2rem'}}>
                                    <div class="social vk">
                                        <a href="#" target="_blank"><i class="fa fa-vk fa"></i></a>    
                                    </div>
                                    <div class="social instagram">
                                        <a href="#" target="_blank"><i class="fa fa-instagram fa"></i></a>
                                    </div>
                                </div>
                            </div>    
                        </Col>   
                        <Col className="col-md-8" > 
                        <Container>
                            <YMaps >
                                <Map style={{width: '100%', height: '520px'}}  state={{ center: [57.72246759681061,39.824911271890244], zoom: 17 }}>
                                    <Placemark
                                        geometry={[57.72246759681061,39.824911271890244]
                                        }
                                        properties={{   
                                        hintContent: 'FS Studio Manicure',
                                        balloonContent: 'Время работы: ежедневно с 10.00 до 20.00'
                                        }}
                                        modules={
                                            ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                        }
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
        )
    }
}
export default ContactMap;