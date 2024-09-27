import Docs from "../../components/Docs";
import Navbar from "../../components/navbar/Navbar";
import { MdOutlineAdd } from "react-icons/md";


const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-between px-10 mt-8">
        <h1 className="text-3xl font-semibold">All Documents</h1>
        <div className="border px-5 py-2 rounded-lg text-white cursor-pointer bg-green-600 flex items-center justify-center hover:bg-green-700">
          <i className="mx-3 font-bold hover:scale-125"><MdOutlineAdd size={23} /></i>
          <button className="">Create New Documents</button>
        </div>
      </div>

      <div className="allDocs px-[100px] mt-6">
        <Docs />
        <Docs />
        <Docs />
        <Docs />
        <Docs />
      </div>
    </>
  )
}

export default Home;