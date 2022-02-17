import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  //   const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultMovies, setResultMovies] = useState('');
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
    console.log(searchParams);
    e.currentTarget.reset();
    if (query === '') {
      return;
    }
  };
  useEffect(() => {
    if (query) {
      fetch(`
https://api.themoviedb.org/3/search/movie?api_key=7164f6a6786f95a54ebe23199620cc0a&query=${query}&language=en-US&page=1&include_adult=false`)
        .then(res => res.json())
        .then(setResultMovies);
    }
    console.log(query);
  }, [query]);

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <input className={s.input} type="text" name="query" />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
      <>
        {resultMovies &&
          resultMovies.results.map(resultMovie => (
            <li className={s.movie_list} key={resultMovie.id}>
              <Link to={`${resultMovie.id}`}>{resultMovie.title}</Link>
            </li>
          ))}
      </>
    </>
  );
}
