import { FetchUsersAction} from '../actions/index';
import {ActionTypes} from '../actions/types';
import {Character} from '../interfaces'

export const usersReducer = (state:Character[]=[], action: FetchUsersAction) => {
	switch (action.type) {
		case ActionTypes.fetchUsers:
			return action.payload
		default:
			return state;
	}
};

