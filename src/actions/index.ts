import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
const url = 'https://api.disneyapi.dev/characters?page=3';

export interface Datum {
  data:       Character[];
  count:      number;
  totalPages: number;
  nextPage:   string;
}



export interface Character {
  films:           string[];
  shortFilms:      string[];
  tvShows:         string[];
  videoGames:      string[];
  parkAttractions: string[];
  allies:          any[];
  enemies:         any[];
  _id:             number;
  name:            string;
  imageUrl:        string;
  url:             string;
}

export interface FetchUsersAction {
    type: ActionTypes.fetchUsers;
    payload: Character[]
  }
  
  export const fetchUsers = () => {
    return async (dispatch:  Dispatch) => {
      const response = await axios.get<Datum>(url); 
      const res = response.data.data
      dispatch<FetchUsersAction>({
        type: ActionTypes.fetchUsers,
        payload:res
      })
    };
  };