import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
import AboutUs from './components/body/AboutUs';
import ContactUs from './components/body/ContactUs';
import Home from './components/body/Home';
import ServiceList from './components/body/offers/ServiceList';
import Header from './components/header/Header';

function App() {
	return (
		<div className='app'>
			<Router>
				<Header />
				<div className='routes'>
					<Routes>
						<Route
							exact
							path='/'
							element={<Home />}
						/>
						<Route
							path='/about-us'
							element={<AboutUs />}
						/>
						<Route
							path='/contact-us'
							element={<ContactUs />}
						/>
						<Route
							path='/services'
							element={<ServiceList />}
						/>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
