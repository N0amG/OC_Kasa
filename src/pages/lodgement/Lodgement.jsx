import './lodgement.scss'
import { useParams } from 'react-router-dom'
import Slider from '../../components/slider/Slider'
import logements from '../../data/logements.json'

export default function Lodgement() {
	const { id } = useParams()
	const logement = logements.find((logement) => logement.id === String(id))
	return (
		<main className='lodgement'>
			<Slider imgList={logement.pictures} />
		</main>
	)
}
