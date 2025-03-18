import './Home.scss'
import logements from '../../data/logements.json'
import Banner_img from '../../assets/img/banner_1.png'
import Banner_img2 from '../../assets/img/banner_2.png'
import TagList from '../../components/taglist/Taglist'
import Thumb from '../../components/thumb/Thumb'
import Collapse from '../../components/collapse/Collapse'
import Banner from '../../components/banner/Banner'
import Rating from '../../components/rating/Rating'

export default function Home() {
	return (
		<main>
			<h1>Home</h1> <br/>
			TagList : <TagList tags={logements[9].tags} />
			<br/> Thumbs :
			<div className='thumbs'>
				<Thumb key={logements[0].id} logement={logements[0]} />
			</div>
			<br/> Collapses :
			<div className='collapses'>
				<Collapse
					title={'Fiabilité'}
					content={'Super fiable tkt fréro'}
				/>
				<Collapse
					title={'Description'}
					content={logements[0].description}
				/>
				<Collapse
					title={'Équipements'}
					content={logements[0].equipments}
				/>
			</div>
			<br/> Banners :
			<Banner
				img={Banner_img}
				title={'Chez vous, partout et ailleurs'}
				shadow={60}
			/>
			<Banner
				img={Banner_img2}
				shadow={30}
			/>
			<Rating rating={logements[8].rating} />
		</main>
	)
}
