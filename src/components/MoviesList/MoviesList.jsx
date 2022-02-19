import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  console.log(movies);

  const location = useLocation();
  console.log(location);
  return movies.map(movie => (
    <li className={s.movie_list} key={movie.id}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.title}
      </Link>
    </li>
  ));
};
export default MoviesList;
