import * as api from 'servises/api';
import s from '../Reviews/Reviews.module.css'

const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const { toast } = require('react-toastify');

function Reviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const movieReviews = await api.getReviewsMoviesId(moviesId);
        if (movieReviews.length === 0) {
          return;
        }
        setReviews(movieReviews);
      } catch (error) {
        return toast.error('Please try again');
      }
    };
    fetchMovieReviews();
  }, [moviesId]);
  return (
    <div>
      <ul>
        {reviews.map(({ author, content }) => (
          <li key={author}>
            <h2 className={s.autor}>Author: {author}</h2>
            <p className={s.content}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Reviews;
