import { useState, useEffect } from 'react';
import { useParams, Outlet  } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as api from 'servises/api';
import CastReviews from 'components/CastReviews/CastReviews'
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';


function MovieDetails() {
    const { moviesId } = useParams();
    const [movies, setMovies] = useState([]);
    
    // const location = useLocation();
    // const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        const fetchMoviesId = async () => {
          try {
            const moviesDetails = await api.getMoviesId(moviesId);
    
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
       <CastReviews/>
       <Outlet />
        </>
      )
    }
    export default MovieDetails