import { NavLink } from 'react-router-dom';
import s from '../TrendMovies/TrendMovies.module.css'


function TrendMovies({data, location}) {
    return (
      
        <ul>
        {data.results.map(item => (
          <li key={item.id} className={s.item}>
            <NavLink to={`movies/${item.id}`} state={{ from: location }} className={s.trendMovies}>
              {item.original_title}
              {item.original_name}
            </NavLink>
          </li>
        ))}
      </ul>
      
    )
}
export default TrendMovies