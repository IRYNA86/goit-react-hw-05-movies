import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import * as api from 'servises/api';
import { useLocation  } from 'react-router-dom';
import TrendMovies from 'components/TrendMovies/TrendMovies'

function Home() {
  const [data, setData] = useState({ results: [] });
  console.log(data)
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
    <>
    <h1>Trending today</h1>
<TrendMovies data={data} location={location} />
</>
  );
}
export default Home;
