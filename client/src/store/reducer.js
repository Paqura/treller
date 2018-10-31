import {reducer as authReducer} from '../ducks/auth';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
	authReducer,
	formReducer,
});
