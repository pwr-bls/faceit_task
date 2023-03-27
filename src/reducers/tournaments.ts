import {
  actionTypes,
  ITournament,
  TournamentAction,
} from '../actions/tournaments';

type TournamentState = {
  data: ITournament[];
  isLoading: boolean;
  error: boolean;
};

const initialState: TournamentState = {
  data: [],
  isLoading: false,
  error: false,
};

export default function tournaments(
  state: any = initialState,
  action: TournamentAction
) {
  switch (action.type) {
    case actionTypes.ADD_TOURNAMENT:
      const newTournament: ITournament = {
        name: action?.tournament?.name!,
      };
      return { ...state, data: state.data.concat(newTournament) };

    case actionTypes.ADD_TOURNAMENTS:
      return {
        ...state,
        data: [...(action?.tournaments || [])],
        isLoading: false,
      };

    case actionTypes.REMOVE_TOURNAMENT:
      return {
        ...state,
        data: state.data.filter(
          (tur: ITournament) => tur.id !== action?.tournament?.id
        ),
      };

    case actionTypes.UPDATE_TOURNAMENT:
      return {
        ...state,
        data: state.data.map((tur: ITournament) =>
          tur.id === action?.tournament?.id ? action?.tournament : tur
        ),
      };

    case actionTypes.LOAD_TOURNAMENT:
      return { ...state, isLoading: true, data: [], error: false };

    case actionTypes.ERROR_TOURNAMENT:
      return { ...state, isLoading: false, error: true, data: [] };
  }
  return state;
}
