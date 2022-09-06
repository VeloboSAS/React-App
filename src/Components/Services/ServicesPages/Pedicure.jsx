import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import fon from '../../../assets/4.jpg';
import ReactBnbGallery from 'react-bnb-gallery'

import img1 from './Pedic/1.jpg';
import img2 from './Pedic/2.jpg';
import img3 from './Pedic/3.jpg';
import img4 from './Pedic/4.jpg';
import img5 from './Pedic/5.jpg';

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
};

const photos = [{photo: {img1}}, 
  {photo: {img1}},
  {photo: {img1}}, 
  {photo: {img1}}, 
  {photo: {img1}}];

// const Pedic = () => {
  

//   return (
//     <>
//       <div className="container-fluid" style={fonStyles}>
//         <h1>Педикюр</h1>

//       </div>
//     </>
//   );
// };

// export default Pedic;

export default class Pedicure extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    return (
      <>
        <div className="container-fluid" style={fonStyles}>
          <h1>Педикюр</h1>
          <button onClick={this.toggleGallery}>Open photo gallery</button>
          <ReactBnbGallery
            show={this.state.galleryOpened}
            photos={photos}
            onClose={this.toggleGallery} />
        </div>
      </>  
    )
  }
}