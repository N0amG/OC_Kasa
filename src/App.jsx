import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Lodgement from './pages/lodgement/Lodgement'
import Page404 from './pages/Page404/Page404'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/lodgement/:id' element={<Lodgement />} />
				<Route path='/404' element={<Page404 />} />
				<Route path='*' element={<Navigate to="/404" replace />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
