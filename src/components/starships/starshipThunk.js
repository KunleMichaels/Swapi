import * as actions from './starshipActions';
import * as request from './starshipRequest';

export const getStarships = () => {
  return dispatch => {
    dispatch(actions.getStarships());
    request.getStarships().then((response) => {
      console.log("success", response);
      dispatch(actions.getStarshipsSuccess(response));
    }).catch((error) => {
      console.log("error", error);
      dispatch(actions.getStarshipsFailure(error))
    })
  }
}

export const getStarship = (id) => {
  return dispatch => {
    dispatch(actions.getStarship());
    request.getStarship().then((response) => {
      dispatch(actions.getStarshipSuccess(response));
    }).catch((error) => {
      dispatch(actions.getStarshipFailure(error))
    })
  }
}
