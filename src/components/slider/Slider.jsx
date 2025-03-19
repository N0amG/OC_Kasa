import './slider.scss'
import LeftArrow from '../../assets/img/left_arrow.png'
import { useState } from 'react'

export default function Slider({ imgList }) {
	const [currentSlide, setCurrentSlide] = useState(0)

	const previousSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + imgList.length) % imgList.length)
	}

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % imgList.length)
	}

	return (
		<div className='slider'>
			<button className='previous-button button' onClick={previousSlide}>
				<img src={LeftArrow} className='left_arrow' alt='Previous' />
			</button>

			<div
				className='slides'
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{imgList.map((img, index) => (
					<img
						key={index}
						className='slide'
						src={img}
						alt={`Slide ${index + 1}`}
					/>
				))}
			</div>

			<p className='slide-number'>
				{currentSlide + 1} / {imgList.length}
			</p>

			<button className='next-button button' onClick={nextSlide}>
				<img src={LeftArrow} className='right_arrow' alt='Next' />
			</button>
		</div>
	)
}
