import {createRef} from "react";
import {moviesActions} from "../redux/movies";
import {connect} from "react-redux";
import {useDispatch} from "react-redux";

const MoviesForm = ({addMovie}) => {
    const movieInputRef = createRef();
    const dispatch = useDispatch();

    const addMovieHandler = (event) => {
        event.preventDefault();
        // addMovie(movieInputRef.current.value);
        dispatch(moviesActions.add(movieInputRef.current.value));
        movieInputRef.current.value = "";
    }

    return (
        <form onSubmit={addMovieHandler}>
            <input ref={movieInputRef} type="text"/>
            <button type="submit">Add movie</button>
        </form>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMovie: (movie) => dispatch(moviesActions.add(movie))
//     }
// }

// export default connect(null, mapDispatchToProps)(MoviesForm);
export default MoviesForm;