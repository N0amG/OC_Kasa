import './Tag.scss'

export default function TagList({ tags }) {
	if (!Array.isArray(tags) || !tags.every(tag => typeof tag === 'string')) {
		console.error('Invalid taglist: Expected an array of strings.');
		return null;
	}

	return (
		<div className='taglist'>
			{tags.map((tag, index) => (
				<div key={index} className='tag'>{tag}</div>
			))}
		</div>
	);
}
