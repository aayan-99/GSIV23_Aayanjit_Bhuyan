import React, { useState, useEffect } from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Link, useNavigate } from 'react-router-dom'
import { Result } from '../types/movieDataTypes';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

interface MovieCategoryProps {
    title: string;
    movies: Result[];
}

const AllMoviesGrid: React.FC<MovieCategoryProps> = ({ title, movies }) => {

    const [category, setCategory] = useState<string>('');

    const navigate = useNavigate();

    const openMovie = (id: string) => {
        navigate(`/movies/${id}`);
    };

    useEffect(() => {
        if (title == 'Popular') {
            setCategory('popular');
        } else if (title == 'Trending') {
            setCategory('trending')
        }
        else if (title == 'All Movies') {
            setCategory('all-movies')
        }
    }, []);

    return (
        <div className='px-5 lg:px-10 pt-5 lg:pt-10'>
            {/* header */}
            <div className='w-full'>
                <div className='py-5 pl-7 flex justify-between items-center'>
                    <h1 className='text-[30px] font-[600] text-gray-300 rounded-[10px]'>{title}<span>&#40;{movies?.length}&#41;</span></h1>
                    <Link to={`/category/${category}`} className='text-gray-300 py-1 px-3 cursor-pointer text-[15px] active:scale-95 rounded-[6px] hover:text-white transition-all duration-300 ease-out'>View all<ArrowRightAltRoundedIcon /></Link>
                </div>
            </div>

            {/* movies grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    movies?.filter((_movie, i) => i < 8)?.map((movie) => (
                        <div key={movie?.id} className='hover:shadow-2xl rounded-[9px] cursor-pointer hover:scale-105 transition-all duration-200 ease-out py-3 px-5' onClick={() => openMovie(movie.id.toString())}>
                            <div className='w-full overflow-hidden rounded-[9px]'>
                                <img src={'https://image.tmdb.org/t/p/original' + movie?.backdrop_path} alt="Thumbnail" className='w-full rounded-[9px] hover:scale-110 transition-all duration-300 ease-out' />
                            </div>
                            <div className='w-full px-4 pt-2'>
                                <div className='w-full flex items-start justify-between text-[15px] font-[600] text-gray-300'>
                                    <p>{movie?.title}</p>
                                    <div className='flex items-center'>
                                        <span className='pb-1'><StarRateRoundedIcon style={{ fontSize: '20px', color: '#ffcc41' }} /></span>
                                        <p className=''>{movie?.vote_average}</p>
                                    </div>
                                </div>
                                <div className='w-full text-[12px] font-[400] text-gray-400 pt-1 pb-5'>
                                    <p className='trunc'>{movie?.overview}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllMoviesGrid