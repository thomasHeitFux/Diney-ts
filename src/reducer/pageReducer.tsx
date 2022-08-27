import { NumberPage} from '../actions/index';
import {ActionTypes} from '../actions/types';

export const pageReducer = (state:number=1, action: NumberPage) => {
	switch (action.type) {
		case ActionTypes.numberPage:
			return action.payload
		default:
			return state;
	}
};