import './page404.scss'
import { Link } from 'react-router-dom'

export default function Page404() {
	return (
		<main className="page404">
			<h1>404</h1>
			<p>Oups! La page que vous recherchez n'existe pas.</p>
			<Link to='/' className="back-link">Retourner sur la page d'accueil</Link>
		</main>
	)
}
