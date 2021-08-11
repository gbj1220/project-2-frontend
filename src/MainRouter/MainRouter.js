import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home'
import Apply from '../components/Apply/Apply'
import ApplicationComplete from '../components/ApplicationComplete/ApplicationComplete'

export default function MainRouter() {
	return (
	<div>
		<Router>
			<Header />
			<Switch>
        		<Route exact path="/" component={Home} />
            	<Route exact path="/apply" component={Apply} />
            	<Route exact path="/apply-done" component={ApplicationComplete} />
        	</Switch>
		</Router>
	</div>
	)
}
