import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { Character } from '../actions';

export interface StoreState {
	characters: Character[];
}

export const reducers =
	combineReducers<StoreState>({characters: usersReducer});
