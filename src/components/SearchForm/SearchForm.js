import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../SearchForm/SearchForm.module.css'


function SearchForm({ setSearchParams }) {
  const [nameImages, setNameImages] = useState('');
  
   const handleNameChange = event => {
    setNameImages(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (nameImages.trim() === '') {
      toast.error('Enter the name in the SearchForm');
    }
    setSearchParams({ query: event.currentTarget.elements.query.value });
    setNameImages('');
  };
  return (
    
    <header className={s.header}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.searchForm_button}>
          <span className={s.buttonLabel}>Search</span>
        </button>

        <input
          className={s.searchForm_input}
          type="text"
          name='query'
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={nameImages}
          onChange={handleNameChange}
        />
      </form>
      </header>
         
  );
}
export default SearchForm;
