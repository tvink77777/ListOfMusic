import * as Constants from "./Constants";

function musicReducer(state = Constants.INITIAL_STATE, action) {
  switch (action.type) {
    case Constants.GET_MUSIC_START:
      return {
        ...state,
        requestPending: true
      };

    case Constants.GET_MUSIC_SUCCESS:
      return {
        ...state,
        requestPending: false,
        listOfMusic: action.listOfMusic
      };

    case Constants.GET_MUSIC_ERROR:
      return {
        ...state,
        error: action.payload.error,
        requestPending: false
      };

    default:
      return state;
  }
}

export default musicReducer;
