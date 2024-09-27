import { useState, useRef } from 'react';
import { useParams } from "react-router-dom";
import JoditEditor from "jodit-pro-react";
import Navbar from '../../components/Navbar';


const CreateDocs = () => {

    let { docId } = useParams();

    const editor = useRef(null)
    const [content, setContent] = useState('')

    return (
        <div className='min-h-[100vh]'>
            <Navbar />
            <div className='p-4'>
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onChange={newContent => setContent(newContent)}
                />
            </div>
        </div>

    )
}

export default CreateDocs;