import { FetchUserId,EmptyDetail } from '../actions/index';
import { ActionTypes } from '../actions/types';
import { Character } from '../interfaces'

export const userIdReducer = (state: Character[] = [], action: FetchUserId|EmptyDetail) => {
	switch (action.type) {
		case ActionTypes.fetchUserId:
			return action.payload
			case ActionTypes.emptyDetail:
			return action.payload
		default:
			return state;
	}
};