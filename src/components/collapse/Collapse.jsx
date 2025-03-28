import { useState } from 'react'
import './collapse.scss'
import arrow from '../../assets/img/arrow_up.png'

export default function Collapse({ title, content, type }) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleCollapse = () => {
		setIsOpen(!isOpen)
	}

	let bodyContent

	if (Array.isArray(content)) {
		bodyContent = (
			<ul>
				{content.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		)
	} else {
		bodyContent = <p>{content}</p>
	}

	return (
		<div className={`collapse ${isOpen ? 'active' : ''} collapse-${type}`}>
			<div className='collapse-header'>
				<h2 className='collapse-title'>{title}</h2>
				<i
					className={`collapse-icon ${isOpen ? 'active' : ''}`}
					aria-label='Toggle collapse'
					onClick={toggleCollapse}
				>
					<img src={arrow} alt='Toggle collapse' />
				</i>
			</div>
			<div className={`collapse-body ${isOpen ? 'active' : ''}`}>
				{bodyContent}
			</div>
		</div>
	)
}
