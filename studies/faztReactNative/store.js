import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/store/reducers/';
// crea un store method y cuando corra al inicio lo toma
const initialState = {};

const middleware = [thunk];

// todo lo que se tenga en el middle
// desarrolladores 

 const store = createStore(
   rootReducer,
   initialState,
   compose(
    applyMiddleware(...middleware)
  )
);


export default store;