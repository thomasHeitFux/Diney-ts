import { FetchUserId} from '../actions/index';
import {ActionTypes} from '../actions/types';
import {Character} from '../interfaces'

export const userIdReducer = (state:Character[]=[], action: FetchUserId) => {
	switch (action.type) {
		case ActionTypes.fetchUserId:
			return action.payload
		default:
			return state;
	}
};