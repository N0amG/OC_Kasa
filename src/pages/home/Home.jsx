import Tag from '../../components/tag/Tag'
import Thumb from '../../components/thumb/Thumb'
import Collapse from '../../components/collapse/Collapse'
import './Home.scss'
import logements from '../../data/logements.json'

export default function Home() {
	return (
		<main>
			<h1>Home</h1>
			<Tag name={'Hello World !'} />
			<div className='thumbs'>
				<Thumb key={logements[0].id} logement={logements[0]} />
			</div>
			<div className='collapses'>
				<Collapse title={'Fiabilité'} content={'Super fiable tkt fréro'} />
				<Collapse title={'Description'} content={logements[0].description} />
				<Collapse title={'Équipements'} content={logements[0].equipments} />
			</div>
		</main>
	)
}
