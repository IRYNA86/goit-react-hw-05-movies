import {Route, Routes} from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import { ToastContainer } from 'react-toastify';
import Home from './views/Home/Home';
import Search from './views/Search/Search'


export const App = () => {
 
  return (
    <div>
     <Navigation/>
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/movies" element={<Search />} />
</Routes> 

      
<ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};
