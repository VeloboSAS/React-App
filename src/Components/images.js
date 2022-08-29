import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Cards.css'

const Images = (props) => {
    return (
        <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 p-0" >
                <Card  data-fancybox="gallery"  className="zoom card h-100 shadow rounded-3 img-fluid" href={props.img}>
                        <Card.Img  src={props.imgsm}/> 
                </Card>
            </div>
        </>
    )
}

export default Images;