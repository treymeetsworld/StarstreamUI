import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { LoggedInUserType } from '../models/logged-in-user';


interface IHomepageProps {
  currentUser: LoggedInUserType | undefined
}

type ContentType = {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export default function Homepage(props: IHomepageProps) {

  const [movieData, setMovieData] = useState<ContentType[] | null>([])

  const [tvData, setTvData] = useState<ContentType[] | null>([])

  const [featured, setFeatured] = useState<ContentType[] | null>([])

  useEffect(() => {

    axios.get(`
    https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setFeatured(res.data.results.slice(0, 3))

      })

    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setMovieData(res.data.results.slice(0, 10))
      })

    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setTvData(res.data.results.slice(0, 10))
      })
  }, [])

  return (
    !props.currentUser ? <Navigate to="/login"/> :
    <>
      <h3>Featured</h3>
      <div className="content_container">
        {featured?.map((feat: ContentType,idx) => (
          <>
            {feat.poster_path && (
              <>
                {feat.title ?
                  <Link to={`/movies/${feat.id}`} >
                    <div key={idx} className='movie' >
                      <div className='title_box'>
                        <p>
                          {feat.title}
                        </p>
                      </div>
                      <img src={`https://image.tmdb.org/t/p/w300${feat.poster_path
                        }`} alt={feat.title} />
                    </div>
                  </Link>
                  :
                  <Link to={`/shows/${feat.id}`} >
                    <div  className='movie' key={idx}>
                      <div className='title_box'>
                        <p>
                          {feat.name}
                        </p>
                      </div>
                      <img src={`https://image.tmdb.org/t/p/w300${feat.poster_path
                        }`} alt={feat.name} />
                    </div>
                  </Link>
                }

              </>
            )}
          </>
        ))}
      </div>
      <h3>Movies</h3>
      <div className="content_container">
        {movieData?.map((movie: ContentType, idx) => (
          <>
            <Link to={`/movies/${movie.id}`} >
              <div  className='movie' key={idx}>
                <div className='title_box'>
                  <p>
                    {movie.title}
                  </p>
                </div>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path
                  }`} alt={movie.name} />
              </div>
            </Link>
          </>
        ))}
      </div>
      <h3>TV Shows</h3>
      <div className="content_container">
        {tvData?.map((show: ContentType,idx) => (
          <>
            {show.poster_path && (
              <Link to={`/shows/${show.id}`} >
                <div  className='movie' key={idx}>
                  <div className='title_box'>
                    <p>
                      {show.name}
                    </p>
                  </div>
                  <img src={`https://image.tmdb.org/t/p/w200${show.poster_path
                    }`} alt={show.name} />
                </div>
              </Link>
            )}
          </>
        ))}
      </div>
    </>
  )
}

