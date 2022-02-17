import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [detailsPage, setDetailsPage] = useState();
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetch(`
https://api.themoviedb.org/3/movie/${movieId}?api_key=7164f6a6786f95a54ebe23199620cc0a&language=en-US`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDetailsPage(data);
      });
  }, [movieId]);

  return (
    <>
      <Button />
      {detailsPage && (
        <>
          <div className={s.movie_info}>
            <div className={s.image}>
              <img
                src={
                  'https://image.tmdb.org/t/p/w500/' + detailsPage.poster_path
                }
                alt={detailsPage.title}
                width="250"
                height="350"
              />
            </div>
            <div className={s.info}>
              <h1>{detailsPage.title}</h1>
              <p>User Score:{detailsPage.vote_average}%</p>
              <h2>Overview</h2>
              <p>{detailsPage.overview}</p>
              <h3>Genres</h3>
              <ul>
                {detailsPage.genres.map((genre, id) => (
                  <li key={id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={s.additional_info}>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to={{ pathname: `cast`, state: { from: location } }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={{ pathname: `reviews`, state: { from: location } }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
}
