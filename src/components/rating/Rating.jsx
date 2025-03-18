import './rating.scss'
import StarActive from '../../assets/img/star_active.png'
import StarInactive from '../../assets/img/star_inactive.png'

export default function Rating({ rating }) {
	return (
		<div className='rating'>
			{[1, 2, 3, 4, 5].map((star) => (
				<img
					key={star}
					src={star <= rating ? StarActive : StarInactive}
					alt='star'
					className='star'
				/>
			))}
		</div>
	)
}