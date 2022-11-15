import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, Routes } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Episodes from './components/Episodes';

function App() {
	return (
		<div className="App">
			<NavBar />

			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/about' element={<About />}/>
				<Route path='/episodes' element={<Episodes />}/>
			</Routes>
		</div>
	);
}

export default App;
