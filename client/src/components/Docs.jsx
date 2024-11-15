import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { baseUrl } from "../utils/baseUrl";

const Docs = ({ doc, showDelete, setShowDelete, removeDoc }) => {
    const navigate = useNavigate();

    const deleteDoc = async (id) => {
        try {
            const res = await axios.post(`${baseUrl}/doc/delete-doc`, {
                userId: localStorage.getItem("userId"),
                docId: id,
            });
            if (res?.data.success) {
                toast.success(res?.data?.message);
                removeDoc();
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    return (
        <>
            <div
                onClick={() => navigate(`/create-docs/${doc?._id}`)}
                className="docs p-[10px] flex items-center justify-between bg-slate-100 mt-3 transition-all rounded-lg hover:bg-[#DCDCDC]"
                role="button"
                aria-label="Document"
            >
                <div className="doc-left flex items-center justify-center gap-5">
                    <img
                        src="doc.png"
                        alt="Document"
                        className="w-14 h-14 rounded-full bg-gray-200 p-1"
                    />
                    <div>
                        <h3 className="text-[16px] text-slate-800">{doc?.title}</h3>
                        <p className="text-[12px] text-[#808080]">
                            Created In: {new Date(doc?.date).toDateString()} | Last Updated:{" "}
                            {new Date(doc?.lastUpdate).toDateString()}
                        </p>
                    </div>
                </div>
                <div
                    className="doc-right"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowDelete(true);
                    }}
                >
                    <img
                        src="./delete.png"
                        alt="Delete"
                        className="w-8 h-8 cursor-pointer rounded-full bg-gray-200 p-1 transition-all hover:scale-125"
                    />
                </div>
            </div>

            {showDelete && (
                <div className="delete_doc_container flex items-center justify-center flex-col bg-[rgba(0,0,0,0.3)] fixed inset-0 w-screen h-screen z-50">
                    <div className="delete_doc p-[15px] w-[35vw] rounded-lg bg-[#fff] shadow-md">
                        <div className="flex items-start justify-center flex-col">
                            <h2 className="font-semibold px-3">Delete Document</h2>
                            <div className="items-start justify-around flex mt-3 w-full">
                                <img className="w-14 h-14" src="/deleteImg.png" alt="Delete" />
                                <div className="flex items-start justify-start flex-col">
                                    <h3>Do You Want to Delete This Document?</h3>
                                    <p className="text-gray-400 text-sm">Delete/Cancel</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-5 w-full mt-4">
                                <button
                                    onClick={() => {
                                        deleteDoc(doc?._id);
                                        setShowDelete(false);
                                    }}
                                    className="bg-red-600 px-5 rounded-lg py-1 text-white hover:bg-red-700"
                                >
                                    Delete
                                </button>
                                <button
                                    className="border bg-gray-400 text-white px-5 rounded-lg py-1 hover:bg-gray-500"
                                    onClick={() => setShowDelete(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Docs;
