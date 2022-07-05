import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import s from '../Search/Search.module.css';

function Search({ onSubmit }) {
  const [nameImages, setNameImages] = useState('');
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.themoviedb.org/3/search/movie?api_key=255c87d9189641f6fa37fc4c55a9531c&language=en-US&query=batman&page=1&include_adult=false'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const handleNameChange = event => {
    setNameImages(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (nameImages.trim() === '') {
      toast.error('Enter the name in the search bar');
    }
    onSubmit(nameImages);
    setNameImages('');
  };
  return (
    <>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.searchForm_button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={nameImages}
          onChange={handleNameChange}
        />
      </form>
      <ul>
        {data.results.map(item => (
          <li key={item.id}>
            <img src='https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg' alt=''/>
            
          </li>
        ))}
      </ul>
    </>
  );
}
export default Search;
