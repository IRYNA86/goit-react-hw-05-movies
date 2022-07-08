import {Route, Routes} from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import { ToastContainer } from 'react-toastify';
import Home from './views/Home/Home';
import Search from './views/Search/Search'
import MovieDetails from './views/MovieDetails/MovieDetails';
import NotFound from './views/NotFound/NotFound'


export const App = () => {
 
  return (
    <div>
     <Navigation/>
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/movies" element={<Search />} />
<Route path="movies/:moviesId" element={<MovieDetails />}/>
<Route path="*" element={<NotFound />} />
</Routes> 

      
<ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};
