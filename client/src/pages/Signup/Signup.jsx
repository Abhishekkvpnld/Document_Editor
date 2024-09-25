import { FaUser } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const Signup = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='flex items-center justify-center flex-col h-screen bg-[#f0f0f0]'>
            <div className='flex items-center w-full'>

                <div className="left flex flex-col ml-[50px]">

                    <div className='flex items-center gap-2'>
                        <img src="/icon.ico" alt="img" className='w-14' />
                        <h2 className='font-semibold text-xl'>DocCraft</h2>
                    </div>

                    <form onSubmit={handleSubmit} className='mt-8 pl-6'>

                        <div className='flex flex-col items-start'>
                            <label htmlFor="username" className='text-gray-500 font-semibold'>Username</label>
                            <div>
                                <FaUser />
                                <input required type="text" id='username' name='username' placeholder='Username' className='w-[300px] pl-3 h-[33px] border-none rounded-md' />
                            </div>
                        </div>

                        <div className='flex flex-col items-start mt-2'>
                            <label htmlFor="email" className='text-gray-500 font-semibold'>Email</label>
                            <div>
                                <MdEmail />
                                <input required type="text" name="email" id="email" placeholder='Email' className='w-[300px] pl-3 h-[33px] border-none rounded-md' />
                            </div>
                        </div>

                        <div className='flex flex-col items-start mt-2'>
                            <label htmlFor="phone" className='text-gray-500 font-semibold'>Phone</label>
                            <div>
                                <IoIosPhonePortrait />
                                <input required type="text" name="phone" id="phone" placeholder='Phone' className='w-[300px] pl-3 h-[33px] border-none rounded-md' />
                            </div>
                        </div>

                        <div className='flex flex-col items-start mt-2'>
                            <label htmlFor="password" className='text-gray-500 font-semibold'>Password</label>
                            <div className="relative">
                                <RiLockPasswordLine className="absolute" />
                                <input required type="text" name="password" id="password" placeholder='Password' className='w-[300px] pl-3 h-[33px] border-none rounded-md' />
                            </div>
                        </div>

                        <div className='flex items-center justify-end'>
                            <button type='submit' className='mt-4 bg-green-600 hover:bg-green-700 h-[30px] w-[120px] text-white rounded-md'>Signup</button>
                        </div>
                    </form>

                </div>

                <div className="right flex-1 bg-rose-200">

                </div>

            </div>
        </div>
    )
}

export default Signup;