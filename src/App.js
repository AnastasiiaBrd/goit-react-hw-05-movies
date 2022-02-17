import { lazy, Suspense } from 'react';
import AppBar from 'AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./components/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage.jsx')
);
const Cast = lazy(() => import('./components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('./components/Reviews/Reviews.jsx'));
export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}
