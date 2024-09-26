import { FaRegUser } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl"
import toast from "react-hot-toast";


const Signup = () => {

    const navigate = useNavigate();

    const [viewPassword, setViewPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await axios.post(`${baseUrl}/auth/signup`, { username, email, password, phone });
            if (res) {
                navigate("/login");
                toast.success(res?.data?.message);
            }

        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className='flex items-center justify-center flex-col h-screen bg-[#f0f0f0]'>
            <div className='flex items-center w-full gap-2'>

                <div className="left flex flex-col ml-[50px]">

                    <div className='flex items-center gap-2'>
                        <img src="/icon.ico" alt="img" className='w-14' />
                        <h2 className='font-semibold text-xl'>DocCraft</h2>
                    </div>

                    <form onSubmit={handleSubmit} className='mt-5 pl-6'>

                        <div className='flex flex-col items-start'>
                            <label htmlFor="username" className='text-gray-500 font-semibold'>Username</label>
                            <div className="flex items-center justify-center relative">
                                <FaRegUser className="absolute left-2" />
                                <input required onChange={(e) => setUsername(e.target.value)} value={username} type="text" id='username' name='username' placeholder='Username' className='w-[300px] border-gray-400 border-[1px] pl-8 h-[33px] rounded-md' />
                            </div>
                        </div>

                        <div className='flex flex-col items-start mt-2'>
                            <label htmlFor="email" className='text-gray-500 font-semibold'>Email</label>
                            <div className="flex items-center justify-center relative">
                                <TfiEmail className="absolute left-2" />
                                <input onChange={(e) => setEmail(e.target.value)} value={email} required type="email" name="email" id="email" placeholder='Email' className='w-[300px] pl-8 h-[33px] border-gray-400 border-[1px] rounded-md' />
                            </div>
                        </div>

                        <div className='flex flex-col items-start mt-2'>
                            <label htmlFor="phone" className='text-gray-500 font-semibold'>Phone</label>
                            <div className="flex items-center justify-center relative">
                                <IoIosPhonePortrait className="absolute left-2" />
                                <input onChange={(e) => setPhone(e.target.value)} value={phone} required type="number" name="phone" id="phone" placeholder='Phone' className='w-[300px] border-gray-400 border-[1px] pl-8 h-[33px] rounded-md' />
                            </div>
                        </div>

                        <div className='flex flex-col items-start mt-2'>
                            <label htmlFor="password" className='text-gray-500 font-semibold'>Password</label>
                            <div className="flex items-center justify-center relative">
                                <RiLockPasswordLine onClick={() => setViewPassword((prev) => !prev)} className="absolute left-2" />
                                <input onChange={(e) => setPassword(e.target.value)} value={password} required type={`${viewPassword ? "text" : "password"}`} name="password" id="password" placeholder='Password' className='w-[300px] border-gray-400 border-[1px] pl-8 h-[33px] rounded-md' />
                            </div>
                        </div>

                        <div className='flex items-center justify-end'>
                            <button type='submit' className='mt-4 bg-green-600 hover:bg-green-700 h-[30px] w-[120px] text-white rounded-md'>Signup</button>
                        </div>

                        <p className="mt-2 hover:underline text-blue-700">Already have an account ? <Link className="text-red-600 cursor-pointer no-underline" to={"/login"}>LogIn</Link></p>
                    </form>

                </div>

                <div className="right flex-1 flex items-center justify-center">
                    <img src="/edit.jpg" alt="img" className="mix-blend-multiply" />
                </div>

            </div>
        </div>
    )
}

export default Signup;