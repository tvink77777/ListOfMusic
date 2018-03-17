import * as api from '../../api/music';
import * as Constants from './Constants';

export function getMusic(search) {
  return dispatch => {
    dispatch({
      type: Constants.GET_MUSIC_START,
    });

    api
      .getMusic(search)
      .then((response) => {
        console.log(response);
        dispatch({
          type: Constants.GET_MUSIC_SUCCESS,
          listOfMusic: response.data.results,
        });
      })
      .catch((response) => {
        dispatch({
          type: Constants.GET_MUSIC_ERROR,
          error: response.message,
        });
      });
  };
}
