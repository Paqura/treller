// @flow

import createBrowserHistory from 'history/createBrowserHistory';
import {createStore} from 'redux';
import reducer from './reducer';

// CREATE HISTORY
export const
	history = createBrowserHistory();

const
	store = createStore(reducer);

export default store;
