// import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import s from './HomePage.module.css';

const MoviesList = lazy(() => import('../MoviesList/MoviesList'));

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
      <Suspense fallback={<h1>Loading</h1>}>
        {popularMovies && <MoviesList movies={popularMovies} />}
      </Suspense>
    </>
  );
}
// popularMovies.map(popularMovie => (
//   <li className={s.movie_list} key={popularMovie.id}>
//     <Link to={`movies/${popularMovie.id}`}>{popularMovie.title}</Link>
//   </li>
// ))
