import { useState, useRef, useEffect } from 'react';
import { useParams } from "react-router-dom";
import JoditEditor from "jodit-pro-react";
import Navbar from '../../components/Navbar';
import toast from 'react-hot-toast';
import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';


const CreateDocs = () => {

    let { docId } = useParams();

    const editor = useRef(null)
    const [content, setContent] = useState('');
    const [data, setData] = useState('')

    const updateDocs = async () => {
        try {
            let res = await axios.post(`${baseUrl}/doc/update-doc`, {
                userId: localStorage.getItem("userId"),
                docId: docId,
                content: content
            });
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    const getContent = async () => {
        let res = await axios.post(`${baseUrl}/doc/get-doc`, { userId: localStorage.getItem("userId"), docId: docId });
        const data = await res.data;

        if (data.success) {
            setContent(data?.data?.content);
        }
    }


    useEffect(() => {
        getContent();
    }, []);

    return (
        <div className='min-h-[100vh]'>
            <Navbar />
            <div className='p-4'>
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onChange={(e) => {
                        setContent(e);
                        updateDocs();
                    }}
                />
            </div>
        </div>

    )
}

export default CreateDocs;