import * as actions from './planetActions';
import * as request from './planetRequest';

export const getPlanets = (page=1) => {
  return dispatch => {
    dispatch(actions.getPlanets());
    request.getPlanets(page).then((response) => {
      console.log("success", response);
      if(response.status = 200 )
        dispatch(actions.getPlanetsSuccess(response.data));
    }).catch((error) => {
      console.log("error", error);
      dispatch(actions.getPlanetsFailure(error))
    })
  }
}

export const getPlanet = (id) => {
  return dispatch => {
    dispatch(actions.getPlanet());
    request.getPlanet().then((response) => {
      dispatch(actions.getPlanetSuccess(response));
    }).catch((error) => {
      dispatch(actions.getPlanetFailure(error))
    })
  }
}
