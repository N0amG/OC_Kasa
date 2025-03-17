import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../../assets/img/logo_color.png'

export default function Header() {
	return (
		<header>
			<img src={logo} alt='logo Kasa' />
			<nav className='navbar'>
				<Link to='/'>Accueil</Link>
				<Link to='/about'>A propos</Link>
			</nav>
		</header>
	)
}
