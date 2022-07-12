import { NavLink, useParams, useLocation } from 'react-router-dom';
import s from '../CastReviews/CastReviews.module.css'

const CastReviews = () => {
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <h3>Additional information</h3>
      <ul>
        <li className={s.cast}>
          <NavLink
            to={`/movies/${moviesId}/cast`}
            state={{ from: backLinkHref }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/movies/${moviesId}/reviews`}
            state={{ from: backLinkHref }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CastReviews;
