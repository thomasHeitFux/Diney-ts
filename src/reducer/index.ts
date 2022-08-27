import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { Character } from '../interfaces';
import { userIdReducer } from './userId';

export interface StoreState {
	characters: Character[];
	detail: Character;
}

export const reducers =
	combineReducers({
		characters: usersReducer,
		detail: userIdReducer
	});
