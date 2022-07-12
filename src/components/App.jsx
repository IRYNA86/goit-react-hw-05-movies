import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './Loader/Loader';
import s from '../components/app.module.css'

const Navigation = lazy(() => import('./Navigation/Navigation'));
const Home = lazy(() => import('./views/Home/Home'));
const Search = lazy(() => import('./views/Search/Search'));
const MovieDetails = lazy(() => import('./views/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('./views/NotFound/NotFound'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'))

export const App = () => {
  return (
    <div className={s.container}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Search />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};
