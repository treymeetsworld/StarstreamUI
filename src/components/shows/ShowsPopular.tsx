import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import TVData, { TvData } from '../../models/TvData'

function ShowsPopular(props: {}) {
    const [shows, setShows] = useState([] as TVData[]);
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`, {
            method: 'GET'
        }).then(resp => resp.json()).then(data => (
            setShows(data.results as unknown as TvData[])
            ));
            
    }, []);

  return (<>
        <div className='header'><h3>Popular</h3></div>
        <div className='content_container2'>
                {shows.map((show, idx) => {
                    return(<>
                        {show.poster_path && (
                            <Link to={`/shows/${show.id}`}>
                            <div key={idx} className='movie'>
                            <img src={"https://image.tmdb.org/t/p/w200" + show.poster_path} alt={show.name} />
                            <div className='title_box'>
                                <p>{show.name}</p>
                            </div>
                            </div>
                            </Link>
                          )}
                    </>)
                })}
        </div>
    </>)
}

export default ShowsPopular;