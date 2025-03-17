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
				<Collapse logement={logements[0]} type={'description'} />
				<Collapse logement={logements[0]} type={'equipments'} />
			</div>
		</main>
	)
}
