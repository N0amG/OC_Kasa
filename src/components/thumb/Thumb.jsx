import './thumb.scss'
import { Link } from 'react-router-dom'

export default function Thumb({ logement }) {
	const url = `/lodgement/${logement.id}`
	return (
		<Link to={url} className={`thumb thumb-${logement.id}`}>
			<img src={logement.cover} alt={logement.title} />
			<h3 className='thumb-body'>{logement.title}</h3>
		</Link>
	)
}
