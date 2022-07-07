import s from '../MovieDetailsCard/MovieDetailsCard.module.css'

function MovieDetailsCard({movies}) {
    const { id, poster_path, original_title, vote_average, overview, genres } =
    movies;

  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';
    const defaultImgUrl =
    'https://st.depositphotos.com/1808604/1386/i/600/depositphotos_13860360-stock-photo-three-balalaika.jpg';
   
    return (
        <div className={s.movieDetails} key={id}>
          <img
            className={s.movieDetails__image}
            src={poster_path ? `${BASE_IMG_URL}${poster_path}` : `${defaultImgUrl}`}
            alt={original_title}
          />
          <div className={s.movieInfo}>
            <h1 className={s.movieInfo__title}>{original_title}</h1>
            <p className={s.movieInfo__text}>
              User score: {vote_average.toFixed(1)}
            </p>
            <h2 className={s.movieInfo__title}>Overview</h2>
            <p className={s.movieInfo__text}>{overview}</p>
            <h2 className={s.movieInfo__title}>Genres</h2>
            <ul className={s.genreList}>
              {genres.map(({ id, name }) => (
                <li className={s.genreItem} key={id}>
                  <p className={s.genreText}>{name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default MovieDetailsCard