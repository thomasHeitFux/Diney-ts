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