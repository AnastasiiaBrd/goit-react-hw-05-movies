import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetch(`
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7164f6a6786f95a54ebe23199620cc0a&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setReviews(data.results);
      });
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <p className={s.author}>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </>
  );
}
