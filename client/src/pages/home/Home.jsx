import { useEffect, useState } from "react";
import Docs from "../../components/Docs";
import Navbar from "../../components/Navbar";
import { MdOutlineAdd } from "react-icons/md";
import { LuSubtitles } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";


const Home = () => {

  const navigate = useNavigate();

  const [showCreateDoc, setShowCreateDoc] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const handleCreateDoc = async () => {
    if (title === "") return toast.error("Please enter title...");

    try {
      const res = await axios.post(`${baseUrl}/doc/create-doc`, {
        userId: localStorage.getItem("userId"),
        title: title
      });
      const data = await res.data;

      if (data?.success) {
        toast.success(data?.message);
        setShowCreateDoc(false);
        navigate(`/create-docs/${data?.docId}`);
      }

    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const getAllDocs = async () => {
    try {
      const res = await axios.post(`${baseUrl}/doc/get-all-docs`, {
        userId: localStorage.getItem("userId"),
      });
      const data = await res.data;

      if (data?.success) {
        setData(data?.data);
      }

    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-between px-10 mt-8">
        <h1 className="text-3xl font-semibold">All Documents</h1>
        <div onClick={() => {
          setShowCreateDoc(true)
          document.getElementById("doc").focus();
        }}
          className="border px-5 py-2 rounded-lg text-white cursor-pointer bg-green-600 flex items-center justify-center hover:bg-green-700">
          <i className="mx-3 font-bold hover:scale-125"><MdOutlineAdd size={23} /></i>
          <button>Create New Documents</button>
        </div>
      </div>

      <div className="allDocs px-[100px] mt-6">

        {
          data && data.map((i, index) => (
            <Docs key={index} setShowDelete={setShowDelete} showDelete={showDelete} doc={i} removeDoc={()=>getAllDocs()} />
          ))
        }
      </div>


      {
        showCreateDoc && (
          <div className="created-doc-div flex items-center justify-center flex-col bg-[rgb(0,0,0,0.3)] fixed bottom-0 left-0 right-0 top-0 w-screen h-screen">
            <div className="create-doc bg-[#fff] rounded-lg w-[35vw] p-[15px] flex items-start justify-center flex-col">

              <h3 className="text-xl font-semibold">Create New Document</h3>

              <label htmlFor="doc" className="mt-3 text-sm text-slate-400 font-semibold">Enter A Title</label>
              <div className="flex items-center justify-end w-full relative">
                <LuSubtitles className="absolute left-2" />
                <input onChange={(e) => setTitle(e.target.value)} value={title} required type="text" name="doc" id="doc" placeholder='Enter Title Here...' className='w-full pl-8 h-[33px] text-lg border-gray-400 border-[1px] rounded-md' />
              </div>

              <div className="flex items-center justify-between w-full mt-3">
                <button className="border bg-blue-700 px-4 py-1 rounded-lg hover:bg-blue-800 text-white" onClick={handleCreateDoc}>Create New Document</button>
                <button className="border bg-red-700 text-white px-4 py-1 rounded-lg hover:bg-red-800" onClick={() => setShowCreateDoc(false)}>Cancel</button>
              </div>

            </div>
          </div>
        )
      }

    </>
  )
}

export default Home;