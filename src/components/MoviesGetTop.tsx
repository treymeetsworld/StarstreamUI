import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addMovieWatchList } from "../functions/watchlist";
import { LoggedInUserType } from "../models/logged-in-user";
import { Movie } from "../models/Movie";

interface IMovieProps {
    currentUser: LoggedInUserType | undefined
}

function MoviesGetTop(props: IMovieProps) {

    // replace with logged in users id
    let userId: number = 1;
    const [Movies, setMovies] = useState([] as Movie[]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`, {
            method: 'GET'
        }).then(resp => resp.json()).then(data => (
            setMovies(data.results as unknown as Movie[])
        ));
    }, []);

    return (
        <>
            <h3>Top Rated</h3>
            <div className="content_container">
                {Movies.map((Movie, idx) => {
                    return (
                        <div key={idx} className='movie'>
                            <Link to={`/movies/${Movie.id}`}>
                                <div className='title_box'>
                                    <p>{Movie.title}</p>
                                </div>
                                <img src={"https://image.tmdb.org/t/p/w200" + Movie.poster_path} alt={Movie.title} />
                            </Link>
                            <button onClick={() => addMovieWatchList(userId, Movie.id, Movie.genre_ids)}>+</button>
                        </div>
                    );
                })}
            </div>
        </>
    );

}

export default MoviesGetTop;
