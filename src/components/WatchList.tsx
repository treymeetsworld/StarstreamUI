import { useEffect, useState } from 'react';
import { LoggedInUserType } from '../models/logged-in-user';
import { WatchListResponse } from '../models/WatchListResponse';
import WatchListMovies from './WatchListMovies';
import { Navigate } from 'react-router-dom'

interface IMovieProps {
    id: number | undefined;
    currentUser: LoggedInUserType | undefined
}


function WatchList(props: IMovieProps) {

    const [movieIds,setMovieIds] = useState([] as number[]);

    useEffect(()=>{

        fetch(`http://localhost:8080/watchlist/movies/${props.id}`).then(resp => {
            return resp.json();
        }).then(watchlist => {
            
            const list = watchlist as WatchListResponse[];
            const videoIds = list.map(item => item.video);
            setMovieIds([...videoIds]);
        })

    }, [props.id]);
    
    return (
        !props.currentUser ? <Navigate to="/login"/> :
        <>
            <h2>Watch List</h2>
            <WatchListMovies movieIds={movieIds} />
        </>);
}

export default WatchList;