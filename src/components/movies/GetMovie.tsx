import MoviesGetLatest from "./MoviesGetLatest";
import MoviesGetPopular from "./MoviesGetPopular";
import MoviesGetTop from "./MoviesGetTop";
import { Navigate } from 'react-router-dom'
import { LoggedInUserType } from "../../models/logged-in-user";

interface IMovieProps {
    currentUser: LoggedInUserType | undefined
}

function GetMovie(props: IMovieProps) {

    return (
        !props.currentUser ? <Navigate to="/login"/> :
        <>
            
            <h2>Movies</h2>
            <MoviesGetPopular currentUser={props.currentUser} />
            <MoviesGetTop currentUser={props.currentUser} />
            <MoviesGetLatest currentUser={props.currentUser} />
        </>);
}

export default GetMovie;