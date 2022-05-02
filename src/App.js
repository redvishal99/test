import './App.scss';
import ToDoList from './components/Pages/ToDoList/ToDoList.js';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

const App = () => {
	
	return (
		<>
			<div>
			<Switch>
				<Route path='/' component={HomePage} exact />
				<Route
					path='/ToDoList'
					component={ToDoList}
					exact
				/>
			</Switch>
		</div>
		</>
	);
};

export default App;
