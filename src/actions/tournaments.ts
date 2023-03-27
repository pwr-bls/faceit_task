export interface ITournament {
  name: string;
  id?: string;
  game?: string;
  organizer?: string;
  participants?: {
    current: number;
    max: number;
  };
  startDate?: string;
}

export type TournamentAction = {
  type: string;
  tournament?: ITournament;
  tournaments?: ITournament[];
};

export const actionTypes = {
  ADD_TOURNAMENT: 'ADD_TOURNAMENT',
  ADD_TOURNAMENTS: 'ADD_TOURNAMENTS',
  UPDATE_TOURNAMENT: 'UPDATE_TOURNAMENT',
  LOAD_TOURNAMENT: 'LOAD_TOURNAMENT',
  ERROR_TOURNAMENT: 'ERROR_TOURNAMENT',
  REMOVE_TOURNAMENT: 'REMOVE_TOURNAMENT',
};

export function addTournaments(tournaments: ITournament[]) {
  const action: TournamentAction = {
    type: actionTypes.ADD_TOURNAMENTS,
    tournaments,
  };
  return action;
}

export function addTournament(tournament: ITournament) {
  const action: TournamentAction = {
    type: actionTypes.ADD_TOURNAMENT,
    tournament,
  };
  return action;
}

export function updateTournament(tournament: ITournament) {
  const action: TournamentAction = {
    type: actionTypes.UPDATE_TOURNAMENT,
    tournament,
  };
  return action;
}

export function removeTournament(tournament: ITournament) {
  const action: TournamentAction = {
    type: actionTypes.REMOVE_TOURNAMENT,
    tournament,
  };
  return action;
}

export function loadTournament() {
  const action: TournamentAction = {
    type: actionTypes.LOAD_TOURNAMENT,
  };
  return action;
}

export function errorTournament() {
  const action: TournamentAction = {
    type: actionTypes.ERROR_TOURNAMENT,
  };
  return action;
}
