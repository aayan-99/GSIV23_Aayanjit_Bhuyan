import React from 'react';
import { Result } from '../types/movieDataTypes';
import MovieCard from './MovieCard'
import { observer } from 'mobx-react-lite';
import Slider from "react-slick";

interface MovieCategoryProps {
    title: string;
    movies: Result[]
}

const MovieCategory: React.FC<MovieCategoryProps> = ({ title, movies }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };

    return (
        <div className='w-full'>
            {/* Header */}
            <div className='relative'>
                <div className='pb-4 px-16 flex items-center group w-[190px]'>
                    <h1 className='text-[30px] font-[600] text-gray-300 rounded-[10px]'>{title}</h1>
                    <p className='absolute text-gray-300 pt-2 px-3 hidden group-hover:left-[10%] cursor-pointer active:scale-95 group-hover:block transition-all duration-300 ease-out'>View all</p>
                </div>
            </div>
            
            {/* content */}
            <div className='w-full px-10'>
                <Slider {...settings} className='flex gap-10'>
                    {movies?.filter((_data, i) => i < 8)?.map((movie) => (
                        <MovieCard key={movie?.id} id={movie?.id} title={movie?.original_title} rating={movie?.vote_average} description={movie?.overview} image={movie?.backdrop_path} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default observer(MovieCategory)