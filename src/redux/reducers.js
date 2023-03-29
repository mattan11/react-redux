import {combineReducers} from "redux";
import actorsReducer from "./actors";
import moviesReducer from "./movies";
import booksReducer from "./books";

const rootReducer = combineReducers({
    actors: actorsReducer,
    movies: moviesReducer,
    books: booksReducer
});

export default rootReducer;