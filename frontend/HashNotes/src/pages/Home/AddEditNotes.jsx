import React, { useState } from 'react';
import TagInput from '../../components/Input/TagInput.jsx';
import { MdClose } from 'react-icons/md';
import axiosInstance from '../../utils/axiosInstance.js';

const AddEditNotes = ( { noteData, type, onClose, getAllNotes, showToastMessage} ) => {

    const [title, setTitle] = useState(noteData?.title || "");
    const [content, setContent] = useState(noteData?.content || "");
    const [tags, setTags] = useState(noteData?.tags || []);

    const [error, setError] = useState(null);

    //Edit Note
    const editNote = async () => {
        const noteid = noteData._id;
        try{
            const response = await axiosInstance.put("/edit-note/" + noteid, {
                title,
                content,
                tags
            });
            if( response.data && response.data.note){
                showToastMessage("Note Updated Successfully", "edit")
                getAllNotes();
                onClose();
            }
        }
        catch( error ){
            if( error.response && error.response.data && error.response.data.message ){
                setError(error.response.data.message);
            }
            else{
                setError("An unexpected error occurred. Please try again later.")
            }
        }
    };

    //Add Note
    const addNewNote = async () => {
        try{
            const response = await axiosInstance.post("/add-note", {
                title,
                content,
                tags
            });
            if( response.data && response.data.note ){
                showToastMessage("Note Added Successfully", )
                getAllNotes();
                onClose();
            }
        }
        catch( error ){
            if( error.response && error.response.data && error.response.data.message ){
                setError(error.response.data.message);
            }
            else{
                setError("An unexpected error occurred. Please try again later.")
            }
        }
    };

    const handleAddNote = ()=> {

        if(!title){
            setError("Please enter the title")
            return;
        }
        if(!content){
            setError("Please enter the content")
            return;
        }

        setError("");

        if(type === "edit"){
            editNote();
        }
        else{
            addNewNote();
        }
    }

  return (
    <div className='relative p-3'>

        <button 
            onClick={onClose} 
            className='w-8 h-8 rounded-md flex items-center justify-center absolute -top-2 -right-2 '>
            <MdClose className='text-xl text-slate-400 hover:text-red-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:scale-125 transition-all ease-in-out ' />
        </button>

        <div className='flex flex-col gap-2'>
            <label className='input-label text-xs sm:text-sm md:text-base lg:text-lg text-slate-500 dark:text-neutral-100'>TITLE</label>
            <input 
                type='text'
                className='text-xl sm:text-xl md:text-2xl lg:text-2xl text-slate-950 dark:text-neutral-100 dark:placeholder:text-neutral-400 bg-slate-100 dark:bg-neutral-700 border rounded-md border-slate-300 dark:border-neutral-700 p-2 outline-none '
                placeholder='Add a Title for your Note.'
                value={title}
                onChange={ ({target}) => setTitle(target.value) }
            />
        </div>

        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label text-xs sm:text-sm md:text-base lg:text-lg text-slate-500 dark:text-neutral-100'>CONTENT</label>
            <textarea
                type='text' 
                className='text-xs sm:text-sm md:text-base lg:text-lg text-slate-950 dark:text-neutral-100 dark:placeholder:text-neutral-400 outline-none bg-slate-100 dark:bg-neutral-700 border rounded-md border-slate-300 dark:border-neutral-700 p-2 sm:p-3 md:p-4 overscroll-contain '
                placeholder='Elaborate your Note clearly in detail.'
                rows={10}
                value={content}
                onChange={ ({target}) => setContent(target.value) }
            />
        </div>

        <div className='mt-3'>
            <label className='input-label text-xs sm:text-sm md:text-base lg:text-lg text-slate-500 dark:text-neutral-100'>TAGS</label>
            <TagInput tags={tags} setTags={setTags} />
        </div>

        {
            error && <p className='text-red-500 pt-4 text-xs sm:text-sm md:text-base lg:text-lg'>
                {error}
            </p>
        }

        <button className='btn-primary w-full font-medium mt-5 p-2 sm:p-3 md:p-4 hover:scale-95 transition-all ease-in-out' onClick={ handleAddNote }>
            {type === "edit" ? "UPDATE" : "ADD"} 
        </button>
    </div>
  )
}

export default AddEditNotes
