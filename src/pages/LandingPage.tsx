import { observer } from 'mobx-react-lite';
import PrimaryCarousal from '../components/PrimaryCarousal';
import Searchbar from '../components/Searchbar';
import { moviesStore } from '../store/MoviesStore';
import MoviesGrid from '../components/MoviesGrid';

const LandingPage = () => {

    return (
        <div className='relative'>

            {/* desktop searchbar */}
            <div className='hidden md:block fixed top-[10%] right-[15px] md:right-[40px] lg:right-[50px] z-[100]'>
                <Searchbar />
            </div>

            {/* mobile searchbar */}
            <div className='block md:hidden fixed top-[8.25%] w-full py-3 px-5 z-[100]'>
                <Searchbar />
            </div>

            {/* carousal */}
            <div className='mt-16 md:mt-0'>
                <PrimaryCarousal />
            </div>

            {/* movies */}
            <MoviesGrid title='Popular' movies={moviesStore?.popularMovies?.results} />
            <MoviesGrid title='Trending' movies={moviesStore?.topRatedMovies?.results} />
            <MoviesGrid title='All Movies' movies={moviesStore.allMovies?.results} />
        </div>
    )
}

export default observer(LandingPage)