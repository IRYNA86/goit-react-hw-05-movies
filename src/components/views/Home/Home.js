import {useState, useEffect} from 'react';
import axios from 'axios';

function Home(){
    const [data, setData] = useState({ results: [] });

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://api.themoviedb.org/3/trending/all/day?api_key=255c87d9189641f6fa37fc4c55a9531c',
        );
  
  setData(result.data)
        
  
      };
  
      fetchData();
    }, []);
  

return(
<ul>
      {data.results.map(item => (
        <li key={item.id}>
          <a href={item.poster_path}>{item.original_title}{item.original_name}</a>
        </li>
      ))}
    </ul>
)
}
export default Home