import * as actions from './peopleActions';
import * as request from './peopleRequest';

export const getPeople = (page=1) => {
  return dispatch => {
    dispatch(actions.getPeople());
    request.getPeople(page).then((response) => {
      console.log("success", response);
      if(response.status = 200 )
        dispatch(actions.getPeopleSuccess(response.data));
    }).catch((error) => {
      console.log("error", error);
      dispatch(actions.getPeopleFailure(error))
    })
  }
}

export const getPerson = (id) => {
  return dispatch => {
    dispatch(actions.getPerson());
    request.getPerson().then((response) => {
      dispatch(actions.getPersonSuccess(response));
    }).catch((error) => {
      dispatch(actions.getPersonFailure(error))
    })
  }
}
