import * as actions from './starshipActions';
import * as request from './starshipRequest';

export const getStarships = (page=1) => {
  return dispatch => {
    dispatch(actions.getStarships());
    request.getStarships(page).then((response) => {
      console.log("success", response);
      if(response.status = 200)
        dispatch(actions.getStarshipsSuccess(response.data));
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
