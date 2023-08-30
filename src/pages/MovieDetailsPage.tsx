import { observer } from 'mobx-react-lite';
import { moviesStore } from '../store/MoviesStore';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getMovieDetails } from '../api/getMovieDetails';


const MovieDetailsPage = () => {

    const params = useParams();

    useEffect(() => {
        getMovieDetails(params?.id ? params?.id : '')
    }, [])


    return (
        <div className='pt-10'>
            <div className='w-full flex flex-col lg:flex-row '>
                {/* movie banner */}
                <div className='w-full max-w-[700px] p-6'>
                    <img src={`https://image.tmdb.org/t/p/original${moviesStore?.singleMovieDetails?.backdrop_path}`} className='w-full rounded-[10px]' alt="MainImage" />
                </div>

                {/* movie details */}
                <div className='w-full flex flex-col justify-center items-start p-6 lg:p-0 lg:pl-10'>
                    <div className=''>
                        <p className='text-[30px] lg:text-[50px] font-[800] py-1 text-gray-300'>{moviesStore?.singleMovieDetails?.original_title}</p>
                        <div className='flex gap-2'>
                            <p className='text-[15px] lg:text-[22px] font-[500] py-1 text-gray-600'>{moviesStore?.singleMovieDetails?.release_date}</p>
                            <p className='text-gray-300 text-[15px] lg:text-[22px] pt-1'>|</p>
                            <p className='text-[15px] lg:text-[22px] font-[500] py-1 text-gray-600'>{moviesStore?.singleMovieDetails?.runtime} minutes</p>
                            <p className='text-gray-300 text-[15px] lg:text-[22px] pt-1'>|</p>
                            <p className='text-[15px] lg:text-[22px] font-[500] py-1 text-gray-600'>{moviesStore?.singleMovieDetails?.production_companies[1]?.name}</p>
                        </div>
                        <div className='flex gap-2'>{moviesStore?.singleMovieDetails?.genres?.map((genere) => (
                            <p className='text-[13px] font-[400] py-1 text-gray-500' key={genere?.id}>{genere?.name}.</p>
                        ))}</div>
                    </div>
                </div>
            </div>

            {/* movie description */}
            <div className='w-full px-7 lg:pt-5'>
                <p className='text-[14px] lg:text-[18px] font-[500] py-1 text-gray-300'>{moviesStore?.singleMovieDetails?.overview}</p>
            </div>
        </div>
    )
}

export default observer(MovieDetailsPage)