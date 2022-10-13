import { FetchUsersAction, SearchChar } from '../actions/index';
import { ActionTypes } from '../actions/types';
import { Character } from '../interfaces'

export const usersReducer = (state: Character[] = [], action: FetchUsersAction | SearchChar) => {
	switch (action.type) {
		case ActionTypes.fetchUsers:
			return action.payload
		case ActionTypes.searchChar:
			return action.payload
		default:
			return state;
	}
};

