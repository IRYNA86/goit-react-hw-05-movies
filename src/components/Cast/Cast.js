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
          `Whoops something went wrong, please try again later 🙅‍♂️`
        );
      }
    };
    fetchMovieCast();
    console.log(fetchMovieCast())
  }, [moviesId]);

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const DEFAULT_IMG =
    'https://www.pngkey.com/png/full/121-1219231_user-default-profile.png';

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
