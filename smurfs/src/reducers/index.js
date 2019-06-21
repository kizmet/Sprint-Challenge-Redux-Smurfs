/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import { GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, SAVE_SMURF, SAVE_SMURF_SUCCESS, DELETE_SMURF, REQUEST_ERROR } from '../actions';

const initialState = {
  smurfs: [],
  error: null,
  fetching: false,
  savingSmurf: false,
  deletingSmurf: false

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
    return {
      ...state,
      fetching: true
    }
    case GET_SMURFS_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      fetching: false
    }
    case GET_SMURFS_FAILURE:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }
    case SAVE_SMURF:
    return {
      ...state,
      savingSmurf: true,
    }
    case SAVE_SMURF_SUCCESS:
      return { ...state, smurfs: action.payload, savingSmurf: false };    
    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: true,
      }
    case REQUEST_ERROR:
      return {
        ...initialState, 
        smurfs: state.smurfs, 
        error: action.payload 
      };      


    default:
      return state;
  }
};

export default reducer
