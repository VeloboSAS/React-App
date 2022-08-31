import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from './Modal/Modal'


export const Service = (props) => {
	const [modalActive, setModalActive] = useState(false)
	return (
		
			<div className="services__item service service--fade"> 
				<img className="service__img" src={props.img} alt="service" />
				<div className="service__content"> 
					<b className="service__name">{props.name}</b><span className="service__price">от {props.price} руб </span>
					<p className="service__text">{props.text}</p>
					<Button className="service__button button" variant="secondary" onClick={()=>setModalActive(true)}>Записаться</Button>
				</div>
				<Modal active={modalActive} setActive={setModalActive}>
					<div className="modal__title">{props.name}</div>
				</Modal>
			</div>
		
	)
}