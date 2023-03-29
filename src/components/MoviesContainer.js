import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllMovies} from "../redux/operations";

const MoviesContainer = (props) => {
    const movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, []);

    return (
        <ul className="movies-container">
            {movies.list.map((movie) => (
                <li key={movie}>{movie}</li>
            ))}
        </ul>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         movies: state.movies
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getAllMovies2: () => dispatch(getAllMovies())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
export default MoviesContainer;