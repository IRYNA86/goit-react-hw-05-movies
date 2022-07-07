import { NavLink } from 'react-router-dom';


function TrendMovies({data, location}) {
    return (
        <ul>
        {data.results.map(item => (
          <li key={item.id}>
            <NavLink to={`${item.id}`} state={{ from: location }}>
              {item.original_title}
              {item.original_name}
            </NavLink>
          </li>
        ))}
      </ul>
    )
}
export default TrendMovies