import { Link } from 'react-router-dom'
import './footer.scss'
import logo from '../../assets/img/logo_white.png'

export default function Footer() {
	return (
		<footer>
			<img src={logo} alt='logo Kasa' />
			<span></span>
			<p><span>© 2020 Kasa. All </span><span>rights reserved</span></p>
		</footer>
	)
}