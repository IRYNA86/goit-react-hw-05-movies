import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

function Navigation() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.home)}
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.activeLink : s.movies)}
        >
          Movies
        </NavLink>
    </nav>
    </>
  );
}
export default Navigation;
