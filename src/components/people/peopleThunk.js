import * as actions from './peopleActions';
import * as request from './peopleRequest';

export const getPeople = () => {
  return dispatch => {
    dispatch(actions.getPeople());
    request.getPeople().then((response) => {
      console.log("success", response);
      dispatch(actions.getPeopleSuccess(response));
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