import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { moviesStore } from '../store/MoviesStore';

const PrimaryCarousal = () => {
    return (
        <div className='relative'>
            {/* desktop carousal */}
            <div className='hidden md:block'>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={35}
                    totalSlides={5}
                    isPlaying={true}
                    interval={5000}
                    infinite={true}
                >
                    <Slider>
                        {
                            moviesStore?.topRatedMovies?.results?.filter((_item: any, i: any) => i < 5).map((movie: any, i: number) => (
                                <Slide index={i} key={i}>
                                    <div className='w-full bg-red-300 h-[500px] relative'>
                                        <img src={'https://image.tmdb.org/t/p/original' + movie?.backdrop_path} alt="Thumbnail" className='w-full ' />
                                        <div className='absolute bottom-0 left-0 right-0 top-[30%] bg-gradient-to-b from-[#00000000] to-[#0f0f0f] h-full'></div>
                                        <div className='absolute text-gray-300 top-[40%] xl:top-[60%] 3xl:top-[70%] left-[8%]'>
                                            <p className='text-[62px] font-[700] hidden lg:block'>{movie?.original_title}</p>
                                            <div className='w-full max-w-[600px] text-[15px] h-[53px] mt-5 overflow-hidden leading-[17px] hidden 2xl:block'>
                                                <p>{movie?.overview}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            ))
                        }
                    </Slider>
                </CarouselProvider>
            </div>
            
            {/* mobile carousal */}
            <div className='block md:hidden'>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={55}
                    totalSlides={5}
                    isPlaying={true}
                    interval={5000}
                    infinite={true}
                >
                    <Slider>
                        {
                            moviesStore?.topRatedMovies?.results?.filter((_item: any, i: any) => i < 5).map((movie: any, i: number) => (
                                <Slide index={i} key={i}>
                                    <div className='w-full bg-red-300 h-[500px] relative'>
                                        <img src={'https://image.tmdb.org/t/p/original' + movie?.backdrop_path} alt="Thumbnail" className='w-full ' />
                                        <div className='absolute bottom-0 left-0 right-0 top-[30%] bg-gradient-to-b from-[#00000000] to-[#0f0f0f] h-full'></div>
                                        <div className='absolute text-gray-300 top-[40%] xl:top-[60%] 3xl:top-[70%] left-[8%]'>
                                            <p className='text-[62px] font-[700] hidden lg:block'>{movie?.original_title}</p>
                                            <div className='w-full max-w-[600px] text-[15px] h-[53px] mt-5 overflow-hidden leading-[17px] hidden 2xl:block'>
                                                <p>{movie?.overview}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            ))
                        }
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default PrimaryCarousal