import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.navigation}>
    <NavLink to="/" className={s.nav_item}>
      Home
    </NavLink>
    <NavLink to="/movies" className={s.nav_item}>
      Movies
    </NavLink>
  </nav>
);
export default Navigation;
