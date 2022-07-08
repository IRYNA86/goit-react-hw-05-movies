import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as api from 'servises/api';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';

function MovieDetails() {
    const { moviesId } = useParams();
    const [movies, setMovies] = useState([]);
    console.log(movies)
    // const location = useLocation();
    // const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        const fetchMoviesId = async () => {
          try {
            const moviesDetails = await api.getMoviesId(moviesId);
    console.log(moviesDetails)
            if (!moviesDetails) {
              
              return;
            }
    
            setMovies(moviesDetails);
          } catch (error) {
                      return toast.error(
              'Please try again later'
            );
          }
        };
        fetchMoviesId();
      }, [moviesId]);

      return(
        <>
        {/* <BackLink to={backLinkHref}>Back</BackLink> */}
        <MovieDetailsCard movies={movies}/>
        {/* {movies.id} */}
        {/* <img src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`} alt={movies.original_title}/> */}
        </>
      )
    }
    export default MovieDetails