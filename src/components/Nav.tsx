import { Link } from "react-router-dom";
import { LoggedInUserType } from "../models/logged-in-user";

type INavProps = {
  currentUser: LoggedInUserType | undefined;
  setCurrentUser: (currentUser: LoggedInUserType) => void;
};

const logout = function () {};
export default function Nav(props: INavProps) {
  return (
    <nav>
      <ul id="app-nav">
        <li id="title">
          <Link to="/">Starstream</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/shows">Shows</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
          <Link to="/faqs">Faqs</Link>
        </li>
        <li>
          <form action="">
            <input type="search"  id="search" />
            <button id="search-btn" type="submit">Search</button>
          </form>
        </li>
      </ul>
      <ul id="app-util">
        <li id="menu">
          <Link to={""}>Menu</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to={"/"}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
