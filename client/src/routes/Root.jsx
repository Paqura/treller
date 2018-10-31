import {Route, Switch} from 'react-router-dom';
import AboutPage from './About';
import DashBoard from './DashBoard';
import Navigation from '../components/Navigation';
import React from 'react';

const
	Root = () => (
		<React.Fragment>
			<Navigation />
			<Switch>
				<Route exact
					path="/"
					component={DashBoard}
				/>
				<Route exact
					path="/about"
					component={AboutPage}
				/>
			</Switch>
		</React.Fragment>
	);

export {Root};
export default Root;
