import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from 'servises/api';
import s from '../Cast/Cast.module.css'

function Cast() {
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
        return toast.error('Please try again');
      }
    };
    fetchMovieCast();
  }, [moviesId]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';
  const defaultImg =
    'https://st.depositphotos.com/1808604/1386/i/600/depositphotos_13860360-stock-photo-three-balalaika.jpg';

  return (
    <>
      <ul  className={s.castImages}>
        {cast.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id}>
            <img
              src={
                profile_path ? `${baseImgUrl}${profile_path}` : `${defaultImg}`
              }
              alt=""
              width="200"
              height="250"
            />
            <p className={s.name}>{name}</p>
            <p className={s.character}>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cast;
