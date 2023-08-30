import { observer } from 'mobx-react';
import { Link } from 'react-router-dom'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Navbar = () => {

  return (
    <nav className='w-full flex justify-between items-center shadow-lg bg-[#2c2c2c] px-6 pr-8 py-3'>
      <Link to='/' className='bg-primary-color cursor-pointer p-1.5 px-3 bg-gray-900 rounded-[9px] active:scale-95 transition-all duration-100 ease-out'>
        <p className='text-[23px] font-[800] text-gray-400'>Binge<span className='text-white'>TV</span></p>
      </Link>

      <Link to='/account' className='cursor-pointer'>
        <AccountCircleRoundedIcon style={{ transform: 'scale(1.8)', color: '#6d6d6d' }} />
      </Link>
    </nav>
  )
}

export default observer(Navbar)