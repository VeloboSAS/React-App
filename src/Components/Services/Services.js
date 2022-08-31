import React, {useRef} from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import './Services.css'
import fon from '../../assets/4.jpg';
import {Service} from './Service'

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

// import img_1 from '../img/services/foto_1.webp'
// import img_2 from '../img/services/foto_2.webp'
// import img_3 from '../img/services/foto_3.webp'
// import img_4 from '../img/services/foto_4.webp'
// import img_5 from '../img/services/foto_5.webp'
// import img_6 from '../img/services/foto_6.webp'

function Services() {

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
			{serviceImg: difficult, serviceName: 'Сложный дизайн', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: simple, serviceName: 'Простой дизайн', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: correction, serviceName: 'Коррекция + окрашивание краской', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: remove, serviceName: 'Снятие покрытия', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: without, serviceName: 'Маникюр без покрытия', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: fpench, serviceName: 'Маникюр с покрытием + френч/градиент', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: build, serviceName: 'Наращивание ногтей', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: mono, serviceName: 'Маникюр с однотонным покрытием', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: pedicure, serviceName: 'Педикюр', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: eyelash, serviceName: 'Наращивание ресниц', servicePrice: '1000', serviceText: 'asdfasdfasdf'},

		]
	}
	return (
		<section id="services" className="services" style={{background: `url(${fon})`}}>
			<div className="container">
				<div className="row">
					<div className="col">
						<h2 className="section-title services__title"> Наши Услуги</h2>
						<div className="services__box" ref={sectionRef}>
							{
								state.services.map((item, i) => {
									return(
										<Service img={item.serviceImg} name={item.serviceName} price={item.servicePrice} text={item.serviceText} key={i} />
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services;