import React, {useRef} from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import './Services.css'
import {Service} from './Service'
import { Container, Row, Col } from 'react-bootstrap';
import difficult from '../../assets/5.jpg';
import simple from '../../assets/6.jpg';
import correction from '../../assets/7.jpg';
import remove from '../../assets/8.jpg';
import without from '../../assets/9.jpg';
import fpench from '../../assets/10.jpg';
import build from '../../assets/11.jpg';
import mono from '../../assets/12.jpg';
import pedicure from '../../assets/pedicure.jpg';
import eyelash from '../../assets/eyelash.jpg';


const Services = (props) => {

	const sectionRef = useRef(null)

	const intersection = useIntersection(sectionRef,{
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	})

	const fadeIn = element => {
		gsap.to(element, 1, {
			opacity: 1,
			y: 0,
			ease: 'power4.out',
			stagger: {
				amount: 1
			}
		})
	}
	const fadeOut = element => {
		gsap.to(element, 1, {
			opacity: 1,
			y: -60,
			ease: 'power4.out',
			stagger: {
				amount: 1
			}
		})
	}

	intersection && intersection.intersectionRatio < 0.5 ? fadeOut('.service--fade') : fadeIn('.service--fade')

	const state = {
		services: [
			{serviceImg: difficult, serviceName: 'Сложный дизайн', servicePrice: '70', serviceText: 'asdfasdfasdf'},
			{serviceImg: simple, serviceName: 'Простой дизайн', servicePrice: '30', serviceText: 'asdfasdfasdf'},
			{serviceImg: correction, serviceName: 'Коррекция + окрашивание краской', servicePrice: '590', serviceText: 'asdfasdfasdf'},
			{serviceImg: remove, serviceName: 'Снятие покрытия', servicePrice: '150', serviceText: 'asdfasdfasdf'},
			{serviceImg: without, serviceName: 'Маникюр без покрытия', servicePrice: '500', serviceText: 'asdfasdfasdf'},
			{serviceImg: fpench, serviceName: 'Маникюр с покрытием + френч/градиент', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: build, serviceName: 'Наращивание ногтей', servicePrice: '1800', serviceText: 'asdfasdfasdf'},
			{serviceImg: mono, serviceName: 'Маникюр с однотонным покрытием', servicePrice: '1100', serviceText: 'asdfasdfasdf'},
			{serviceImg: pedicure, serviceName: 'Педикюр', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: eyelash, serviceName: 'Наращивание ресниц', servicePrice: '1100', serviceText: 'asdfasdfasdf'},

		]
	}


	// let ServicesElement = {props.state.services.map((item, i) => 
	// 		<Service img={item.props.serviceImg} name={item.serviceName} price={item.servicePrice} key={i} />
	// )}


	return (
		<section id="services" className="services" >
			<Container className="container">
				<Row className="row">
					<Col className="col">
						<h1 className="services__title" > Наши Услуги</h1>
						<div className="services__box" ref={sectionRef}>
						{
							state.services.map((item, i) => {
							return(
							<Service img={item.serviceImg} name={item.serviceName} price={item.servicePrice} key={i} />
							)
							})
}
{/* 
							<ServicesElement /> */}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Services;

