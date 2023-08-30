import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { useNavigate } from 'react-router-dom'

interface MovieCardProps {
    image: string,
    title: string,
    rating: number,
    description: string,
    id: number,
}


const MovieCard: React.FC<MovieCardProps> = ({
    image,
    title,
    rating,
    description,
    id
}) => {

    const navigate = useNavigate();

    const openMovie = () => {
        navigate(`/movies/${id}`)
    };

    return (
        <div key={id} className='hover:shadow-2xl rounded-[9px] cursor-pointer hover:scale-105 transition-all duration-200 ease-out py-3 px-5' onClick={openMovie}>
            <div>
                <div className='w-full overflow-hidden rounded-[9px]'>
                    <img src={'https://image.tmdb.org/t/p/original' + image} alt="Thumbnail" className='w-full rounded-[9px] hover:scale-110 transition-all duration-300 ease-out' />
                </div>
                <div className='w-full px-4 pt-2'>
                    <div className='w-full flex items-start justify-between text-[15px] font-[600] text-gray-300'>
                        <p>{title}</p>
                        <div className='flex items-center'>
                            <span className='pb-1'><StarRateRoundedIcon style={{ fontSize: '20px', color: '#ffcc41' }} /></span>
                            <p className=''>{rating}</p>
                        </div>
                    </div>
                    <div className='w-full text-[12px] font-[400] text-gray-400 pt-1 pb-5'>
                        <p className='trunc'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard