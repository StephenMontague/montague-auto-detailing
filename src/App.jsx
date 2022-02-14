import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
import Home from './components/body/Home';
import Services from './components/body/offers/Service';
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
							element={<Services />}
						/>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
