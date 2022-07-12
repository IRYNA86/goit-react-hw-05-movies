import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { ToastContainer } from 'react-toastify';
import Home from './views/Home/Home';
import Search from './views/Search/Search';
import MovieDetails from './views/MovieDetails/MovieDetails';
import NotFound from './views/NotFound/NotFound';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Loader from './Loader/Loader';
import s from '../components/app.module.css'

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
