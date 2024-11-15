import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/baseUrl";
import { username } from "../utils/username";


const Navbar = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [data, setData] = useState({});

    const getUser = async () => {
        try {
            if (localStorage.getItem("userId")) {
                let res = await axios.post(`${baseUrl}/auth/user`, { userId: localStorage.getItem("userId") });
                if (res?.data?.success) {
                    setData(res?.data);
                } else {
                    return toast.error("Plese login first...")
                }
            }

        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    const handleLogout = async () => {

        try {
            let res = await axios.post(`${baseUrl}/auth/logout`, { userId: localStorage.getItem("userId") });
            navigate("/login");

            if (res?.data?.success) {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("userId");
                localStorage.removeItem("token");

                toast.success(res?.data?.data?.message);
            }

        } catch (error) {
            toast.error(error?.response?.data?.data?.messsage);
        }
    }

    useEffect(() => {
        getUser();
    }, []);


    return (
        <div className="navbar w-full h-[60px] flex items-center justify-between bg-[#f4f4f4] px-10">
            <div className="left flex items-center justify-center gap-2  cursor-pointer" onClick={() => navigate("/")}>
                <img src="/icon.ico" className="w-12 h-12 rounded-full" alt="img" />
                <h4 className="font-semibold">DocCraft</h4>
            </div>

            <div className="right flex items-center justify-center gap-3">
                <div className="search flex items-center justify-center bg-slate-200 w-100% rounded-lg px-2 h-8" >
                    <i><FiSearch className="mx-2 hover:scale-125 hover:text-blue-700 hover:font-bold cursor-pointer" /></i>
                    <input placeholder="Search here..." className="bg-slate-200 rounded-lg w-full px-2 h-full" onChange={(e) => setSearch(e.target.value)} value={search} type="text" />
                </div>

                {data?.success ? <button onClick={handleLogout} className="bg-blue-700 px-3 py-1 rounded-lg cursor-pointer text-white hover:bg-blue-800">Logout</button>
                    : <button onClick={() => navigate("/login")} className="bg-purple-700 px-3 py-1 rounded-lg cursor-pointer text-white hover:bg-purple-800">Login</button>
                }

                {
                    data?.success && (
                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                            <span className="font-bold text-white">{username(data?.data?.username)}</span>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Navbar;