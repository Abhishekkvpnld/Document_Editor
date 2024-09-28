import { useState } from "react"
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");

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

                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="font-bold text-white">AB</span>
                </div>
            </div>

        </div>
    )
}

export default Navbar;