import PropTypes from 'prop-types';
import s from '../MovieDetailsCard/MovieDetailsCard.module.css'

function MovieDetailsCard({ movies }) {
  const { id, poster_path, original_title, overview, vote_average } = movies;

  const baseImgURl = 'https://image.tmdb.org/t/p/w300';
  const defaultImgUrl =
    'https://st.depositphotos.com/1808604/1386/i/600/depositphotos_13860360-stock-photo-three-balalaika.jpg';

  return (
    <div key={id} className={s.movieCard}>
      <img
        src={poster_path ? `${baseImgURl}${poster_path}` : `${defaultImgUrl}`}
        alt={original_title}
      />
      <div className={s.cardText}>
        <h2>{original_title}</h2>
        <p>
          User score: {vote_average} %
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {/* <ul>
          {genres.map(({ name }) => (
            <li key={name}>
              <p>{name}</p>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

MovieDetailsCard.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    }),
};

export default MovieDetailsCard;
