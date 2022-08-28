import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Cards.css'

const Cards = (props) => {
    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4" >
                <div className="zoom card h-100 shadow rounded-3" style={{background: '#D3D3D3'}}>
                    <img src={props.img} alt="" className="card-img-top img-fluid rounded-3" />
                    <div className="card-body">
                        <div className="d-grid text-center" style={{height: '60px'}}>
                            <h5 className="card-title fst-italic">{props.title}</h5>
                        </div>
                        <div className="d-grid justify-content-center align-items-center  mt-4">   
                            <button className="btn btn-secondary">Записаться</button>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;