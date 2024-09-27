import { useState } from "react";
import Docs from "../../components/Docs";
import Navbar from "../../components/Navbar";
import { MdOutlineAdd } from "react-icons/md";
import { LuSubtitles } from "react-icons/lu";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  const [showCreateDoc, setShowCreateDoc] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleCreateDoc = async () => {
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-between px-10 mt-8">
        <h1 className="text-3xl font-semibold">All Documents</h1>
        <div onClick={() => setShowCreateDoc(true)} className="border px-5 py-2 rounded-lg text-white cursor-pointer bg-green-600 flex items-center justify-center hover:bg-green-700">
          <i className="mx-3 font-bold hover:scale-125"><MdOutlineAdd size={23} /></i>
          <button>Create New Documents</button>
        </div>
      </div>

      <div className="allDocs px-[100px] mt-6">
        <Docs openDelete={() => setShowDelete(true)} />
        <Docs openDelete={() => setShowDelete(true)} />
        <Docs openDelete={() => setShowDelete(true)} />
        <Docs openDelete={() => setShowDelete(true)} />
        <Docs openDelete={() => setShowDelete(true)} />
      </div>


      {
        showCreateDoc && (
          <div className="created-doc-div flex items-center justify-center flex-col bg-[rgb(0,0,0,0.3)] fixed bottom-0 left-0 right-0 top-0 w-screen h-screen">
            <div className="create-doc bg-[#fff] rounded-lg w-[35vw] p-[15px] flex items-start justify-center flex-col">

              <h3 className="text-xl font-semibold">Create New Document</h3>

              <label htmlFor="doc" className="mt-3 text-sm text-slate-400 font-semibold">Enter A Title</label>
              <div className="flex items-center justify-end w-full relative">
                <LuSubtitles className="absolute left-2" />
                <input required type="email" name="doc" id="doc" placeholder='Enter Title Here...' className='w-full pl-8 h-[33px] text-lg border-gray-400 border-[1px] rounded-md' />
              </div>

              <div className="flex items-center justify-between w-full mt-3">
                <button className="border bg-blue-700 px-4 py-1 rounded-lg hover:bg-blue-800 text-white" onClick={() => navigate("/create-docs")}>Create New Document</button>
                <button className="border bg-red-700 text-white px-4 py-1 rounded-lg hover:bg-red-800" onClick={() => setShowCreateDoc(false)}>Cancel</button>
              </div>

            </div>
          </div>
        )
      }

      {showDelete &&
        <div className="delete_doc_container  flex items-center justify-center flex-col bg-[rgb(0,0,0,0.3)] fixed bottom-0 left-0 right-0 top-0 w-screen h-screen">
          <div className="delete_doc p-[15px] w-[35vw] rounded-lg bg-[#fff]">
            <div className="flex items-start justify-center flex-col">

              <h2 className="font-semibold px-3">Delete Document</h2>

              <div className="items-start justify-around flex mt-3 w-full">
                <img className="w-14 h-14" src="/deleteImg.png" alt="delete" />
                <div className="flex items-start justify-start flex-col">
                  <h3>Do You Want Delete This Document</h3>
                  <p className="text-gray-400 text-sm">Delete/Cancel</p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-5 w-full">
                <button className="bg-red-600 px-5 rounded-lg py-1 text-white hover:bg-red-700">Delete</button>
                <button className="border bg-gray-400 text-white px-5 rounded-lg py-1 hover:bg-gray-500" onClick={() => setShowDelete(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Home;