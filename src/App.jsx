import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
import Home from './components/body/Home';
import Header from './components/header/Header';

function App() {
	return (
		<div className='app'>
			<Router>
				<Header />
				<Routes>
					<Route
						exact
						path='/'
						element={<Home />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
