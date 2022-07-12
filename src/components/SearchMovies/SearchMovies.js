import { NavLink } from 'react-router-dom';
import s from '../SearchMovies/SearchMovies.module.css'

function SearchMovies({movies, location}) {
    return (
        <div className={s.searchMovies}>
      {movies.results.map(item => (
        <li key={item.id} className={s.item}>
          <NavLink  to={`${item.id}`} state={{ from: location }} className={s.getSearchMovies}>
            {item.original_title}
            {item.original_name}
          </NavLink>
        </li>
      ))}
    </div>
    )
}

export default SearchMovies