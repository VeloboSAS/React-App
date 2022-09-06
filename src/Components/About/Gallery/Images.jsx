import React from 'react';
import c from '../../Cards/Cards.module.css';
import { Card } from 'react-bootstrap';


const Images = (props) => {
    return (
        <>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 p-0" >
                <Card  data-fancybox="gallery"  className={[c.zoom, "card h-100 shadow rounded-3"].join(' ')}  href={props.img}>
                        <Card.Img  src={props.imgsm}/> 
                </Card>
            </div>
        </>
    )
}

export default Images;
