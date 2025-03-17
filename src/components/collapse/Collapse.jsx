import { useState } from 'react'
import './collapse.scss'
import arrow from '../../assets/img/arrow_up.png'

export default function Collapse({ logement, type }) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleCollapse = () => {
		setIsOpen(!isOpen)
	}

	let headerContent
	let bodyContent

	if (type.toLowerCase() === 'description') {
		headerContent = <h2 className='collapse-title'>Description</h2>
		bodyContent = <p>{logement.description}</p>
	} else if (type.toLowerCase() === 'equipments') {
		headerContent = <h2 className='collapse-title'>Équipements</h2>
		bodyContent = (
			<ul>
				{logement.equipments.map((equipment, index) => (
					<li key={index}>{equipment}</li>
				))}
			</ul>
		)
	} else {
		return null
	}

	return (
		<div className={`collapse ${isOpen ? 'active' : ''}`}>
			<div className='collapse-header'>
				{headerContent}
				<img
					src={arrow}
					className={`collapse-icon ${isOpen ? 'active' : ''}`}
					onClick={toggleCollapse}
				></img>
			</div>
			<div className={`collapse-body ${isOpen ? 'active' : ''}`}>
				{bodyContent}
			</div>
		</div>
	)
}
