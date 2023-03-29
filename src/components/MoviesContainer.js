import {connect} from "react-redux";
import {useEffect} from "react";
import {getAllMovies} from "../redux/operations";

const MoviesContainer = ({movies, getAllMovies2}) => {

    useEffect(() => {
        getAllMovies2();
    }, []);

    return (
        <ul className="movies-container">
            {movies.list.map((movie) => (
                <li key={movie}>{movie}</li>
            ))}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMovies2: () => dispatch(getAllMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);