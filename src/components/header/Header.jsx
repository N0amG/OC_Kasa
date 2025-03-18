import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/img/logo_color.png'
import { useLocation } from 'react-router-dom'

export default function Header() {
	const location = useLocation();

	return (
		<header>
			<img src={logo} alt='logo Kasa' />
			<nav className='navbar'>
				<Link to='/' className={`home-link ${location.pathname === '/' ? 'active-link' : ''}`}>Accueil</Link>
				<Link to='/about' className={`about-link ${location.pathname === '/about' ? 'active-link' : ''}`}>A propos</Link>
			</nav>
		</header>
	)
}