import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from './Modal/Modal';
import Pedicure from './ServicesPages/Pedicure';
import {Routes, Route, Link} from 'react-router-dom';

// const link = (
//     'https://n740216.yclients.com/'
// ); 


export const Service = (props) => {

	const [modalActive, setModalActive] = useState(false)
	return (
		
			<div className="services__item service service--fade" > 
				<img className="service__img" src={props.img} alt="service" />
				<div className="service__content"> 
					<b className="service__name" onClick={Pedicure}>{props.name}</b><span className="service__price" onClick={Pedicure}>от {props.price} руб </span>
					<p className="service__text">{props.text}</p>
					<Button className="service__button button" variant="secondary" onClick={()=>setModalActive(false)} href={'/pedicure'}>Подробнее</Button>
				</div>
				<Modal active={modalActive} setActive={setModalActive}>
					<div className="modal__title">{props.name}</div>
				</Modal>
				<Routes>
					{/* <Route exact path="/"  element={<Home/>} /> */}
					<Route exact path="/pedicure" element={<Pedicure />} />
					{/* <Route exact path="/feedback" element={<Feedback/>} />
					<Route exact path="/about" element={<About/>} />
					<Route exact path="/contacts" element={<Contacts/>} /> */}
				</Routes>
			</div>
		
	)
}
