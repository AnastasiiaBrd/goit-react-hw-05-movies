import { Link, useLocation } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  console.log(movies);

  const location = useLocation();
  console.log(location);
  const movieList = movies.map(movie => (
    <li className={s.movie_list} key={movie.id}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.title}
      </Link>
    </li>
  ));
  return <ul> {movieList}</ul>;
};
export default MoviesList;
