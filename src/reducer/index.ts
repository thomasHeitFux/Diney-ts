import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { Character } from '../interfaces';
import { userIdReducer } from './userId';
import { pageReducer } from './pageReducer';

export interface StoreState {
	characters: Character[];
	detail: Character;
	page: number
}

export const reducers =
	combineReducers({
		characters: usersReducer,
		detail: userIdReducer,
		page: pageReducer
	});
