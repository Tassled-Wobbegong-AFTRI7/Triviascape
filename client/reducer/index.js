import { combineReducers } from 'redux';

import triviaReducer from './triviaReducer.js';



const reducers  = combineReducers( {
    trivia: triviaReducer,
})


export default reducers;