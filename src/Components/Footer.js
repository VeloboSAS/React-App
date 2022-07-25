import React, { Component } from "react";
import {Container} from "react-bootstrap";


export default class Footer extends Component {
    render() {
      return (
        <>
            <Container fluid style={{background: '#000000', color: '#D3D3D3'}}> 
                <Container style={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
                    <p>Все фото и видео материалы принадлежат их владельцам.</p>
                </Container>
            </Container>
        </>    
        );
      }
    }

