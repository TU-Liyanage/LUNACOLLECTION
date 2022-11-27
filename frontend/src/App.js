import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<main className='py-3'>
					<Container>
						<Routes>
							<Route path='/' element={<HomeScreen />} />
							<Route path='/product/:id' element={<ProductScreen />} />
							<Route path='/cart' element={<CartScreen />} />
							<Route path='/cart/:id' element={<CartScreen />} />
							{/* by putting ? after id makes it optional */}
						</Routes>
					</Container>
				</main>
				<Footer />
			</Router>
			<ToastContainer />
		</>
	)
}
export default App
