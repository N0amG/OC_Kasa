import './lodgement.scss'
import logements from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import Slider from '../../components/slider/Slider'
import TagList from '../../components/tagList/TagList'
import Rating from '../../components/rating/Rating'
import Collapse from '../../components/collapse/Collapse'

export default function Lodgement() {
	const { id } = useParams()
	const logement = logements.find((logement) => logement.id === String(id))
	return (
		<main className='lodgement'>
			<Slider imgList={logement.pictures} />
			<div className='lodgement-top'>
				<div className='lodgement-text'>
					<h1 className='lodgement-title'>{logement.title}</h1>
					<span className='lodgement-location'>
						{logement.location}
					</span>
				</div>
				<div className='host'>
					<span className='host-name'>{logement.host.name}</span>
					<img
						className='host-img'
						src={logement.host.picture}
						alt={logement.host.name}
					/>
				</div>

				<div className='lodgement-middle'>
					<TagList tags={logement.tags} />
					<Rating rating={logement.rating} />
				</div>
			</div>
			<div className='lodgement-bottom'>
				<Collapse
					title='Description'
					content={logement.description}
					type={2}
				/>
				<Collapse
					title='Équipement'
					content={logement.equipments}
					type={2}
				/>
			</div>
		</main>
	)
}
