import './thumb.scss'
import { Link } from 'react-router-dom'

export default function Thumb({ logement }) {
	const url = `/lodgement/${logement.id}`
	return (
		<Link to={url} className={`thumb thumb-${logement.id}`}>
			<img src={logement.cover} alt={logement.title} />
			<div className='thumb-body'>
				<h3>{logement.title}</h3>
			</div>
		</Link>
	)
}
