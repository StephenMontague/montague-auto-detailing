import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
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
