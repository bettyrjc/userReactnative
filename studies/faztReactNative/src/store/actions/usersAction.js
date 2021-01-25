import axios from "axios";
import {
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
    GET_USERS
  } from "./types";
  
  import { Loading, removeLoading } from "./helperAction";
  
  export const getUsers = () => async (dispatch) => {
    Loading(dispatch);
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
      console.log(res.data);
      removeLoading(dispatch);
    } catch (err) {
      console.log(err);
      removeLoading(dispatch);
    }
  };
  export const addUsers = (value) => async (dispatch) => {
    Loading(dispatch);
    try {
      
      const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, value);
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
      console.log(res.data);
      removeLoading(dispatch);
    } catch (err) {
      console.log(err);
      removeLoading(dispatch);
    }
  };

  export const updateUser = (id,user, history) => async dispatch => {
    UserLoading(dispatch);
    try{
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        user
      );
      dispatch({
        type: UPDATE_USER,
        payload: res.data
      });
      removeUserLoading(dispatch);
    }catch(err){
      removeUserLoading(dispatch);
      console.log('error')
    }
  };

  export const deleteUser = id => async dispatch => {
    console.log('user deleted 0');
    try {
      console.log('user deleted 1');
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log('user deleted 2', 'id',id);
      removeUserLoading(dispatch);
      dispatch({
        type: DELETE_USER,
        payload: id
      });
      console.log('user deleted 3');

    } catch (e) {
      dispatch({
        type: DELETE_USER,
        payload: id
      });
    }
  };