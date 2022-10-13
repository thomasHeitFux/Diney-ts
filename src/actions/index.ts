import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { Datum, Character } from '../interfaces';
const url = 'https://api.disneyapi.dev/characters/';
const searchUrl = 'https://api.disneyapi.dev/character?name=';


export interface NumberPage {
  type: ActionTypes.numberPage;
  payload: number | undefined
}

export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: Character[]
}

export interface FetchUserId {
  type: ActionTypes.fetchUserId;
  payload: Character
}

export interface EmptyDetail {
  type: ActionTypes.emptyDetail;
  payload: []
}
export interface SearchChar {
  type: ActionTypes.searchChar;
  payload: Character[]
}

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Datum>(url);
    const res = response.data.data
    dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: res
    })
  };
};

export const fetchUserId = (id: string | undefined) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Character>(url + id);

    dispatch<FetchUserId>({
      type: ActionTypes.fetchUserId,
      payload: response.data
    })
  };
}

export const fetchPage = (page: number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Datum>(`${url}?page=${page}`);
    const res = response.data.data
    dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: res
    })
  };
}

export const numberPage = (page: number | undefined) => {
  return async (dispatch: Dispatch) => {
    dispatch<NumberPage>({
      type: ActionTypes.numberPage,
      payload: page
    })
  };
};

export const emptyDetail = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.emptyDetail,
      payload: []
    })
  };
};

export const searchChar = (name: string) => {
  return async (dispatch: Dispatch) => {

    const response = await axios.get<Datum>(searchUrl + name);
    let res =response.data.data;
    dispatch<SearchChar>({
      type: ActionTypes.searchChar,
      payload: res
    })

  };
}