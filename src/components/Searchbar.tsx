import { useEffect, useState } from 'react';
import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom'

const Searchbar = () => {

    const [searchResultsToggle, setSearchResultsToggle] = useState(false);

    const [searchResults, setSearchResults] = useState([
        {
            adult: undefined,
            backdrop_path: "",
            genre_ids: [
                0,
                0
            ],
            id: 0.0,
            original_language: "",
            original_title: "",
            overview: "",
            popularity: 0,
            poster_path: "",
            release_date: "",
            title: "",
            video: undefined,
            vote_average: 0,
            vote_count: 0
        },
    ]);

    const [searchParam, setSearchParam] = useState('');

    const searchQueryCall = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchResultsToggle(true)
        setSearchParam(e?.target?.value);
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjgwNWY2OTA4MGFkY2MyZjk4NjljNWM5YmIxZGM0YiIsInN1YiI6IjYyN2UwOWFjZmQxNDBiMDBhY2MyMTY3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.krs7DCNpjnAqvCHIJ-7l4OkUB3D8RPYCyI2f0WX3hmo'
            }
        };

        fetch(`https://api.themoviedb.org/3/search/movie?query=${e?.target?.value}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => setSearchResults(response?.results))
            .catch(err => console.error(err));
    }

    const goToMovie = () => {
        setSearchResultsToggle(false);
    }

    useEffect(() => {
        if (searchParam.length < 2) {
            setSearchResultsToggle(false)
        }
    }, [searchParam]);

    useEffect(() => {
        console.log(searchResults)
        console.log(searchParam)
    }, [searchResults, searchParam])

    return (
        <div className={`w-full shadow-lg flex rounded-[12px] py-2  relative ${searchParam == '' ? 'opacity-80 bg-[#414141]' : 'bg-[#2c2c2c] md:bg-[#0f0f0f]'}`}>

            {/* search icon */}
            <span className=' pl-2.5'>
                <SearchRoundedIcon style={{ color: '#919191' }} className='' />
            </span>

            {/* input */}
            <input type="text" onChange={(e) => searchQueryCall(e)} className='w-full text-[14px] placeholder:text-[15px] placeholder:text-gray-500 placeholder:font-[500] pl-1 pr-2 font-[500] bg-transparent text-gray-300 outline-none lg:min-w-[300px] rounded-[12px]' placeholder='Search' />

            {/* search results */}
            {
                searchResultsToggle && (
                    <div className='w-full absolute rounded-[12px] top-[104%] pb-2 bg-[#272727] z-[80]'>
                        <div className='min-h-[200px] max-h-[400px] overflow-y-scroll hideScrollbar'>
                            {
                                searchResults?.map((result) => (
                                    <Link key={result?.id} to={`/movies/${result?.id}`} className='p-3 border-b flex gap-4 items-center border-[#8d8d8d] hover:bg-gray-500 cursor-pointer hover:text-gray-800' onClick={goToMovie}>
                                        <span className='w-[100px]'>
                                            <img src={`https://image.tmdb.org/t/p/original${result?.backdrop_path}`} className='w-full rounded-[3px]' alt="Thumbnail" />
                                        </span>
                                        <div className='w-full flex flex-col'>
                                            <p className='text-gray-300 font-[600] text-[15px]'>{result?.original_title}</p>
                                            <p className='text-[10px] trunc text-gray-400'>{result?.overview}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Searchbar