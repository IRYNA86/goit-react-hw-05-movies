import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import s from '../Search/Search.module.css';
import * as api from 'servises/api';
import { useSearchParams, useLocation  } from 'react-router-dom';
import SearchMovies from 'components/SearchMovies/SearchMovies';

function Search() {
  const [movies, setMovies] = useState({ results: [] });
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === null) {
      return;
    }
    const fetchGetNameImages = async () => {
      try {
        const getNameMovies = await api.getNameImages(query);
        if (getNameMovies.length === 0) {
          return toast.warning(`${query} don't find`);
        }
        setMovies(getNameMovies.data);
      } catch (error) {
        return toast.error('Please try again');
      }
    };
    fetchGetNameImages();
  }, [query]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      <SearchMovies movies={movies} location={location} />
    </>
  );
}
export default Search;
