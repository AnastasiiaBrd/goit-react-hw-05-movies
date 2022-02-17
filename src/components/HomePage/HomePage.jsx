import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './HomePage.module.css';

export default function HomePage() {
  const [popularMovies, setPopularMovies] = useState();

  useEffect(() => {
    fetch(`
https://api.themoviedb.org/3/trending/movie/day?api_key=7164f6a6786f95a54ebe23199620cc0a`)
      .then(res => res.json())
      .then(data => {
        setPopularMovies(data.results);
      });
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      {popularMovies &&
        popularMovies.map(popularMovie => (
          <li className={s.movie_list} key={popularMovie.id}>
            <Link to={`movies/${popularMovie.id}`}>{popularMovie.title}</Link>
          </li>
        ))}
    </>
  );
}
