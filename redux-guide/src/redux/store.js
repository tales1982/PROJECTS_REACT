import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

/* vou utilizar o redux logger para ajudar a visualiza melhor minhas actions */
// applyMiddleware
//import logger from 'redux-logger'
//agora como segundo paramentro passo ao applyMiddleware(logger)