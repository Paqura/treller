// @flow

import {ConnectedRouter} from 'react-router-redux';
import {history} from './store';
import {Normalize} from 'styled-normalize';
import {Provider} from 'react-redux';
import React from 'react';
import {Root} from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';

const
	App = () => (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Router>
					<React.Fragment>
						<Normalize />
						<Root />
					</React.Fragment>
				</Router>
			</ConnectedRouter>
		</Provider>
	);

window.store = store;
export default App;
