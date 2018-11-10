// @flow
import type {ActionT} from '../../typedefs';

export const SUBMIT_EDIT_TITLE = 'SUBMIT_EDIT_TITLE';

export const submitEditTitle = (title: string) => ({
	payload: title,
	type   : SUBMIT_EDIT_TITLE,
});

const
	initialState = {title: ''};

export const reducer = (state: Object = initialState, action: ActionT) => {
	console.log(state, action);
};
