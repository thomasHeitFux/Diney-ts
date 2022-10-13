import { EmptyDetail } from '../actions/index';
import { ActionTypes } from '../actions/types';
import { Character } from '../interfaces'

export const emptyDetail = (state: Character[] = [], action: EmptyDetail) => {
	switch (action.type) {
		case ActionTypes.emptyDetail:
			return action.payload
		default:
			return state;
	}
};