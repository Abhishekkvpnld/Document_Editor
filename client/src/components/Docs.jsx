

const Docs = ({ doc,handleDelete}) => {

    return (
        <>
            <div className="docs p-[10px] flex items-center justify-between bg-slate-100 mt-3 transition-all rounded-lg hover:bg-[#DCDCDC]">

                <div className="doc-left flex items-center justify-center gap-5">
                    <img src="doc.png" alt="Doc" className="w-14 h-14 rounded-full bg-gray-200 p-1" />

                    <div>
                        <h3 className="text-[16px] text-slate-800">Tips & Tricks For Next js And React Js</h3>
                        <p className="text-[12px] text-[#808080]">Created In : 3 July 2024 | Last Updated : 5 July 2024</p>
                    </div>
                </div>

                <div className="doc-right">
                   <img onClick={handleDelete} src="./delete.png" alt="delete" className="w-8 h-8 rounded-full bg-gray-200 p-1 transition-all hover:scale-125"/>
                </div>

            </div>
        </>
    )
}

export default Docs;