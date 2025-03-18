import './banner.scss'

export default function Banner({ img, title, shadow }) {
	return (
		<div className='banner'>
			<img
				src={img}
				alt={title}
				className={shadow === 60 ? 'shadow60' : 'shadow30'}
			/>
			<h2>{title}</h2>
		</div>
	)
}
