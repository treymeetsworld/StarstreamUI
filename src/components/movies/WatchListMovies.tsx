import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../models/Movie";

interface IMoviePropsMovies {
    movieIds: number[];
}

function WatchListMovies(props: IMoviePropsMovies) {

    const [movieList, setMovieList] = useState([] as Movie[]);

    useEffect(() => {

        const fetchMovies = async () => {
            let promises = [] as Promise<any>[];
            for (let i = 0; i < props.movieIds.length; i++) {
                let videoId = props.movieIds[i];
                const resp = await fetch(`https://api.themoviedb.org/3/movie/${videoId}}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
                promises.push(await resp.json());
            }
            return Promise.all(promises);
        };

        fetchMovies().then(movies => {
            if (movieList.length === 0) {
                setMovieList(movies);
            }
        });

    }, [movieList.length, props.movieIds, props.movieIds.length]);

    return (
        <>
            <h3>Movies</h3>
            <div className="content_container">
                {movieList.map(movie => {
                    return(
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <div className='movie' >
                            <div className='title_box'>
                            <p>{movie.title}</p>
                            </div>
                            <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} alt={movie.title} />
                        </div>
                        </Link>
                    )
                })}
            </div>
        </>
    );

}

export default WatchListMovies;