import {createRef} from "react";
import {moviesActions} from "../redux/movies";
import {connect} from "react-redux";

const MoviesForm = ({addMovie}) => {
    const movieInputRef = createRef();

    const addMovieHandler = (event) => {
        event.preventDefault();
        addMovie(movieInputRef.current.value);
        movieInputRef.current.value = "";
    }

    return (
        <form onSubmit={addMovieHandler}>
            <input ref={movieInputRef} type="text"/>
            <button type="submit">Add movie</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: (movie) => dispatch(moviesActions.add(movie))
    }
}

export default connect(null, mapDispatchToProps)(MoviesForm);