import {moviesActions} from "./movies";

const fetchMovies = () => async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const data = await response.json();

    return data;
}

export const getAllMovies = () =>
    async (dispatch) => {
        const movies = await dispatch(fetchMovies());
        movies.map((movie) => dispatch(moviesActions.add(movie.title)));
    }
