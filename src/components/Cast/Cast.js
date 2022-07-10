import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from 'servises/api';

function Cast () {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);


  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const movieCast = await api.getCastMoviesId(moviesId);

        if (movieCast.length === 0) {
          return;
        }

        setCast(movieCast);
      } catch (error) {
        return toast.error(
          'Please try again'
        );
      }
    };
    fetchMovieCast();
    
  }, [moviesId]);

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const DEFAULT_IMG =
  'https://st.depositphotos.com/1808604/1386/i/600/depositphotos_13860360-stock-photo-three-balalaika.jpg';

  return (
    <div>
      <ul>
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            <img
              src={
                profile_path
                  ? `${BASE_IMG_URL}${profile_path}`
                  : `${DEFAULT_IMG}`
              }
              alt=""
              width="200"
              height="300"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
