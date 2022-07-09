import { NavLink, useParams} from 'react-router-dom';


const CastReviews = () => {
  const { moviesId } = useParams();
//   const location = useLocation();
//   const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <h3>Additional info</h3>
      <ul>
        <li>
          <NavLink
            
            to={`/movies/${moviesId}/cast`}
            // state={{ from: backLinkHref }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            
            to={`/movies/${moviesId}/reviews`}
            // state={{ from: backLinkHref }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default CastReviews;