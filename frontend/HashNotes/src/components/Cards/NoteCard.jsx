import React from 'react';
import moment from 'moment';
import { MdCreate, MdDelete, MdOutlinePushPin } from 'react-icons/md'

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinnedNote}) => {
  return (
    <div className='border dark:border-neutral-600 rounded p-4 bg-white dark:bg-neutral-800 shadow-sm shadow-slate-400 hover:shadow-xl hover:shadow-blue-200 dark:shadow-none hover:border-primary dark:hover:border-neutral-100 hover:scale-105 transition-all ease-in-out my-0' 
         onDoubleClick={onEdit}>
        <div className='flex items-center justify-between ' >
            <div>
                <h6 className='text-sm font-medium line-clamp-1 dark:text-neutral-200'>{title}</h6>
                <span className='text-xs text-slate-500 dark:text-neutral-400'>{moment(date).format('Do MMM YYYY')}</span>
            </div>

            <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-primary' : 'text-slate-300'} hover:scale-125 transition-all ease-in-out shrink-0`} onClick={onPinnedNote} />
        </div>

        <p className='text-xs text-slate-600 mt-2 truncate dark:text-neutral-400 line-clamp-2'> 
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </p>

        <div className='flex items-center justify-between mt-2 transition-all ease-in-out'>
            <div className='text-xs text-slate-500 dark:text-neutral-400'>{tags.map( (item, index) =>  <span className='hover:underline' key={index}>{`#${item} `}</span> )}</div>

            <div className='flex items-center gap-2'>
                <MdCreate 
                    className='icon-btn dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-green-600 hover:scale-125 transition-all ease-in-out'
                    onClick={onEdit}
                />
                <MdDelete 
                    className='icon-btn dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-red-500 hover:scale-125 transition-all ease-in-out'
                    onClick={onDelete}
                />
            </div>
        </div>
    </div>
  )
}

export default NoteCard