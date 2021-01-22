import axios from "axios";
import {
    GET_USERS,
    GET_USER,
    ADD_USER,
    DELETE_USER,
    UPDATE_USER,
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