import { ITournament } from '../actions/tournaments';

export const API_BASE_URL = 'http://localhost:4000';

export const API_TOURNAMENTS_URL = `${API_BASE_URL}/tournaments`;

export const fetchTouramentsData = (search: string) =>
  fetch(`${API_TOURNAMENTS_URL}?q=${search}`).then((res) => res.json());

export const createTourament = (tournament: ITournament) =>
  fetch(API_TOURNAMENTS_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tournament),
  }).then((res) => res.json());

export const deleteTournament = (id: string) =>
  fetch(`${API_TOURNAMENTS_URL}/${id}`, { method: 'DELETE' }).then((res) =>
    res.json()
  );

export const updateTournament = (id: string, name: string) =>
  fetch(`${API_TOURNAMENTS_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  }).then((res) => res.json());
