import { useEffect } from 'react'
import { getAllMovies } from './api/getAllMovies';
import { observer } from 'mobx-react-lite';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getTopRatedMovies } from './api/getTopRatedMovies';
import { Route, Routes } from 'react-router';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { getPopularMovies } from './api/getPopularMovies';
import { getLatestMovies } from './api/getLatestMovies';
import AllMoviesPage from './pages/AllMoviesPage';
import TrendingMoviesPage from './pages/TrendingMoviesPage';
import PopularMoviesPage from './pages/PopularMoviesPage';
import AccountPage from './pages/AccountPage';

function App() {

  useEffect(() => {
    getAllMovies()
    getTopRatedMovies()
    getPopularMovies()
    getLatestMovies()
  }, [])

  return (
    <div className='relative'>
      <div className='sticky top-0 z-[100]'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/movies/:id' element={<MovieDetailsPage />} />
        <Route path='/category/all-movies' element={<AllMoviesPage />} />
        <Route path='/category/trending' element={<TrendingMoviesPage />} />
        <Route path='/category/popular' element={<PopularMoviesPage />} />
      </Routes>
    </div>
  )
}

export default observer(App)
