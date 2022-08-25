import { Character, FetchUsersAction} from '../actions/index';
import {ActionTypes} from '../actions/types';

export const usersReducer = (state:Character[]=[], action: FetchUsersAction) => {
	switch (action.type) {
		case ActionTypes.fetchUsers:
			console.log(action.payload);
			return action.payload
		default:
			return state;
	}
};

