import { get } from './apiBase';

export type Info = {
  count: number;
  pages: number;
  next: null | string;
  prev: null | string;
};

export type Location = {
  name: string;
  url: string;
};

export type Result = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type GetCharactersResponse = {
  info: Info;
  results: Result[];
};

export const getCharacters = (characterName: string) => {
  return get<GetCharactersResponse>(`/character/?name=${characterName}`);
};
