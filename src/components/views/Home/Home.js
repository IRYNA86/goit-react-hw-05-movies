import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
// import axios from 'axios';
import * as api from 'servises/api';
import { useLocation  } from 'react-router-dom';
import TrendMovies from 'components/TrendMovies/TrendMovies'

function Home() {
  const [data, setData] = useState({ results: [] });
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.getTrendingMovies();
        if (result.length === 0) {
          return;
        }
        setData(result.data);
      } catch (error) {
        return toast.error('Please try again later');
      }
    };

    fetchData();
  }, []);

  return (
<TrendMovies data={data} location={location} />
  );
}
export default Home;
