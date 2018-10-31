// @flow

import {ActionT} from '../../typedefs';

export type TUser = {
	user: ?{
		email: string,
		name: string,
	},
};

const
	initialState: TUser = {
		user: null,
	};

export const reducer = (state: TUser = initialState, action: ActionT): TUser => {
	switch(action.type) {
	default: return state;
	}
};
