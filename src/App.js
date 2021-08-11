import './App.css';
import MainRouter from './MainRouter/MainRouter';
import { Provider } from 'react-redux';
import { reduxStore } from './redux-store/reduxStore';

function App() {
	return (
		<Provider store={reduxStore}>
			<div className='App'>
				<MainRouter />
			</div>
		</Provider>
	);
}

export default App;
