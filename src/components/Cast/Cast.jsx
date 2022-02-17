import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import s from './Cast.module.css';

export default function Cast() {
  const [actors, setActors] = useState();
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetch(`
https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7164f6a6786f95a54ebe23199620cc0a&language=en-US`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setActors(data.cast);
      });
  }, [movieId]);

  return (
    <>
      {actors && (
        <>
          <ul>
            {actors.map(actor => (
              <li key={actor.id}>
                <img
                  src={'https://image.tmdb.org/t/p/w500/' + actor.profile_path}
                  alt={actor.name}
                  width="150"
                  height="200"
                />
                <div className={s.actor}>
                  <p>{actor.original_name}</p>
                  <p>Character: {actor.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
