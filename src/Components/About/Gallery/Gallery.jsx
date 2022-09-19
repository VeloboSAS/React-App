import React  from "react";
import Fancybox from "./Fancybox/Fancybox.jsx";
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Images from './Images';
import dataImg from '../../Data/DataImg';
import c from './Gallery.module.css';


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

const Gallery = () => {
return (
    <>       
        <Container >
            <h1 className={c.title}>Наши работы</h1>
            <Container className={c.content}> 

                <p className={c.desc}>
                    У нас работают талантливые  мастера, которые предложат готовые варианты маникюра или реализуют ваши идеи
                </p>
            </Container>
            <Styles>
                <Fancybox>
                    <div className="container-fluid">
                        <div className="container py-5">
                            <div className="row" style={{paddingTop: '2rem'}}>
                                {dataImg.products.map((item, index) => {
                                    return (
                                        <Images img={item.img} imgsm={item.imgsm} key={index}/>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </Fancybox>
            </Styles>    
        </Container>
    </>    
);
}
export default Gallery;