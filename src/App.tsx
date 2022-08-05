import "./App.css";
import Faqs from "./components/Faqs";
import { useState }from 'react';
import Homepage from "./components/Homepage";
import Nav from './components/Nav';
import GetMovie from './components/movies/GetMovie';
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import MovieDetails from './components/movies/MovieDetails';
import TvDetails from './components/shows/TvDetails';
import Settings from './components/Settings';
import Shows from './components/shows/Shows';
import WatchList from "./components/WatchList";
import { LoggedInUserType } from "./models/logged-in-user";


function App(): JSX.Element {

  const [authUser, setAuthUser] = useState<LoggedInUserType>()


  return (
    <>

<Nav currentUser={authUser}  setCurrentUser={setAuthUser}/> 
      <Routes>
        <Route path='/' element={<Homepage  currentUser={authUser} />} />
        <Route path='/register' element={<Register currentUser={authUser} />} />
        <Route path='/login' element={<Login currentUser={authUser} setCurrentUser={setAuthUser} />} />
        <Route path='/settings' element={<Settings currentUser={authUser}/>} />
        <Route path='/settings/:id' element={<Settings currentUser={authUser}/>} />
        <Route path='/movies' element={<GetMovie currentUser={authUser} />} />
        <Route path='/movies/:id' element={<MovieDetails currentUser={authUser}/>} />
        <Route path='/shows' element={<Shows currentUser={authUser} />} />
        <Route path='/shows/:id' element={<TvDetails currentUser={authUser} />} />
        <Route path='/faqs' element={<Faqs currentUser={authUser} />} />
        <Route path='/watchlist' element={<WatchList id={authUser?.authId} currentUser={authUser} />} />
      </Routes>
    </>
  );
}

export default App;