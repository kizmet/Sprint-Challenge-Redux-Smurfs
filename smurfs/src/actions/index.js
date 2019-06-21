/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";


export const getSmurfs = () => dispatch => {
  //dispatch({ type: GET_SMURFS, payload: localStorage.getItem('token')})
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res);
    dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err)
    dispatch({ type: GET_SMURFS_FAILURE, payload: err.message })
  })
}
