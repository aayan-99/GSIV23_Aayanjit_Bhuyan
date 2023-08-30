import profilePic from '../assets/profile.jpg'
import axisBank from '../assets/axis-bank.svg'
import masterCard from '../assets/mastercard.svg'

const AccountPage = () => {
    return (
        <div className='px-10 md:px-[60px] xl:px-[150px] pt-10'>

            {/* header */}
            <div className='w-full flex justify-between items-start pb-5 border-b'>
                <div className='w-full flex flex-col'>
                    <h1 className='text-[24px] text-gray-300 font-[500]'>Choose how you appear</h1>
                    <p className='text-[16px] text-[#727272]'>Signed in as example.mail@organization.com</p>
                </div>
                <div className='w-14 h-14 rounded-full'>
                    <img src={profilePic} alt="Profile Pic" className='w-full rounded-full' />
                </div>
            </div>

            {/* form */}
            <div className='w-full pt-20 grid grid-cols-2 gap-x-8 gap-y-6 md:gap-x-20 md:gap-y-10'>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='text-gray-300 text-[14px]'>Name</label>
                    <input type="text" name='name' className='border-b outline-none placeholder:text-[16px] placeholder:text-gray-600 bg-transparent text-gray-300' placeholder='eg. Jhon Doe' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email" className='text-gray-300 text-[14px]'>Email</label>
                    <input type="text" name='email' className='border-b outline-none placeholder:text-[16px] placeholder:text-gray-600 bg-transparent text-gray-300' placeholder='eg. yourmail@example.com' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone" className='text-gray-300 text-[14px]'>Phone</label>
                    <input type="number" min={0} name='phone' className='border-b outline-none placeholder:text-[16px] placeholder:text-gray-600 bg-transparent text-gray-300' placeholder='eg. 776590876XX' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className='text-gray-300 text-[14px]'>Password</label>
                    <input type="text" min={0} name='password' className='border-b outline-none placeholder:text-[16px] placeholder:text-gray-600 bg-transparent text-gray-300' placeholder='eg. ************' />
                </div>
            </div>

            {/* submit button */}
            <div className='w-full flex justify-end pt-8'>
                <button className='w-full md:w-fit text-gray-300 bg-[#34a853] text-[14px] font-[600] px-4 py-2 md:py-1 rounded-[8px] hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300 ease-out'>Submit</button>
            </div>
            <div className='border-t flex flex-col gap-10 items-start md:gap-0 md:flex-row justify-between mt-24 pt-10'>

                {/* cancel membership */}
                <div className='w-fit flex flex-col justify-center gap-4'>
                    <h1 className='text-[22px] text-gray-300'>Membership & Subscription</h1>
                    <button className='text-gray-300 bg-[#b33a28] text-[14px] font-[600] px-3 py-2 md:py-1.5 rounded-[8px] hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300 ease-out'>Cancel Membership</button>
                </div>

                {/* card details */}
                <div className='flex flex-col lg:flex-row gap-4'>

                    {/* credit card */}
                    <div className='w-full bg-[#838383] min-w-[300px] min-h-[150px] flex flex-col justify-between rounded-[7px]'>
                        <div className='flex justify-between items-start pt-2'>
                            <h1 className='text-[16px] text-gray-200 px-3 pt-1.5'>Axis NEO</h1>
                            <span className='w-[100px] h-[30px] flex justify-center items-'>
                                <img src={axisBank} alt="Logo" className='w-full' />
                            </span>
                        </div>
                        <div className='w-full flex justify-between items-end'>
                            <div className='flex flex-col pl-3 pb-3'>
                                <h1 className='text-[16px] text-gray-800'>9487XXXXXXXXXXXXXX</h1>
                                <h1 className='text-[14px] text-gray-800'>Jhon Doe</h1>
                            </div>
                            <span className=''>
                                <img src={masterCard} alt="MasterCard Logo" className='w-full max-w-[70px]' />
                            </span>
                        </div>
                    </div>

                    {/* details */}
                    <div className='flex flex-col'>
                    <h1 className='text-gray-300 text-[14px]'>example.mail@organization.com</h1>
                    <h1 className='text-gray-300 text-[14px]'>Password: ************</h1>
                    <h1 className='text-gray-300 text-[14px]'>Phone: 7738959975</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage