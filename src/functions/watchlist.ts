import { videoType } from "../models/videoType"
import { WatchListRequest } from "../models/WatchListRequest";


export function addMovieWatchList(userid:number, video:number, genre:number[]) {
    console.log();
    
    let Type = new videoType(1, "Movie");
    let addWatchlist = new WatchListRequest(video,userid,Type,genre)

    fetch(`http://localhost:8080/watchlist/movies`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addWatchlist)
    }).then(resp=>resp.json().then(data=>{
        console.log(addWatchlist);
        console.log(data);
    }));

}
