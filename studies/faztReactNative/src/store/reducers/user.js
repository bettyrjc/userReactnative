import {
    GET_USERS,
    GET_USER,
    DELETE_USER,
    ADD_USER,
    UPDATE_USER,
    LOADING,
    END_LOADING
  } from "../actions/types";
  
  const initialState = {
    loading: false,
    users: [],
    user: {},
  };
  // payload: es la data que quieres pasar a tu action
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case END_LOADING:
        return {
          ...state,
          loading: false,
        };
      case GET_USERS:
        return {
          ...state,
          users: action.payload,
        };
      case GET_USER:
        return {
          ...state,
          user: action.payload,
        };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      case ADD_USER:
        return {
          ...state,
          users: [action.payload, ...state.users],
        };
      case UPDATE_USER:
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id ? (user = action.payload) : user
          ),
        };
      
      default:
        return state;
    }
  }