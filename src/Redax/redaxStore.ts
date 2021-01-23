import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import { ActionsTypes } from "./store";

let reducers= combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer
});

let store = createStore(reducers);
export default store;