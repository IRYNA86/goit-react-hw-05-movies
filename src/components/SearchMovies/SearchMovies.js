import { NavLink } from 'react-router-dom';
function SearchMovies({movies, location}) {
    return (
        <>
      {movies.results.map(item => (
        <li key={item.id}>
          <NavLink  to={`${item.id}`} state={{ from: location }}>
            {item.original_title}
            {item.original_name}
          </NavLink>
        </li>
      ))}
    </>
    )
}

export default SearchMovies