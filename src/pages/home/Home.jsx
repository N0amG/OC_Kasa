import './Home.scss'
import logements from '../../data/logements.json'
import Banner_img from '../../assets/img/banner_1.png'
import Thumb from '../../components/thumb/Thumb'
import Banner from '../../components/banner/Banner'

export default function Home() {
	return (
		<main className='home'>
			<Banner
				img={Banner_img}
				title={'Chez vous, partout et ailleurs'}
				shadow={60}
			/>
			<div className='thumbs'>
				{logements.map((logement) => (
					<Thumb key={logement.id} logement={logement} />
				))}
			</div>			
		</main>
	)
}
