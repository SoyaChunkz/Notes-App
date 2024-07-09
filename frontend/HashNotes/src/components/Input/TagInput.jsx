import React, { useState } from 'react';
import { MdAdd, MdClose} from 'react-icons/md';

const TagInput = ({ tags, setTags }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const addNewTag = () => {
        if(inputValue.trim() !== ""){
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            addNewTag();
        }
    }

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter( (tag) => tag !== tagToRemove) );
    }

  return (
    <div>
        <div>
            {
                tags?.length > 0 && (
                    <div className='flex items-center gap-2 flex-wrap mt-2'>
                        {
                            tags.map( (tag, index) => (
                                <span key={index} className='flex items-center gap-2 text-xs sm:text-sm text-slate-950 dark:text-neutral-100 bg-slate-100 dark:bg-neutral-700 px-3 py-1 border rounded-md border-slate-300 dark:border-neutral-700'>
                                    # {tag}
                                    <button onClick={ ()=> {handleRemoveTag(tag)} }>
                                        <MdClose className='hover:hover:scale-125 transition-all ease-in-out'/>
                                    </button>
                                </span>
                            ))
                        }
                    </div>
                )
            }
        </div>

        <div className='flex items-center gap-2 sm:gap-4 mt-3 mb-4'>
            <input 
                type='text' 
                value={inputValue}
                className='text-sm border px-2 sm:px-3 py-1 sm:py-2 rounded-md outline-none dark:text-neutral-100 dark:placeholder:text-neutral-400 bg-slate-100 dark:bg-neutral-700 border-slate-300 dark:border-neutral-700 w-[88%] sm:w-[40%]' 
                placeholder='Add tags/keywords.'
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />

            <button className='w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded border-blue-700 dark:border-none hover:bg-primary dark:hover:bg-neutral-700 hover:border-none hover:scale-125 transition-all ease-in-out' onClick={ ()=> { addNewTag() }}>
                <MdAdd className='text-xl sm:text-2xl text-blue-700 dark:text-neutral-400 hover:text-white dark:hover:text-neutral-100' />
            </button>
        </div>
    </div>
  )
}

export default TagInput
