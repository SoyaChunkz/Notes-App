import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import NoteCard from '../../components/Cards/NoteCard.jsx';
import EmptyCard from '../../components/EmptyCard/EmptyCard.jsx';
import Toast from '../../components/ToastMessage/Toast.jsx';
import { MdAdd } from 'react-icons/md';
import AddEditNotes from './AddEditNotes.jsx';
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance.js';
import AddNotesImg from '../../assets/images/add-note.svg';
import NoDataImg from '../../assets/images/no-data.svg';



const Dashboard = () => {

  // State to manage the modal's visibility and type (add or edit)
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null
  });

  const  [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add"
  })

  const [allNotes, setAllNotes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({
      isShown: true,
      type: "edit",
      data: noteDetails
    });
  }

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShown: true,
      message,
      type
    });
  }

  const handleCloseToast = () => {
    setShowToastMsg({
      isShown: false,
      message: ""
    });
  }

  const handleClearSearch = () => {
    setIsSearch(false);
    getAllNotes();
  }

  //Get User Info 
  const getUserInfo = async () => {
    try{
      const response = await axiosInstance.get("/get-user");
      if( response.data && response.data.user ){
        setUserInfo(response.data.user);
      }
    }
    catch( error ){
      if( error.response.status ){
        localStorage.clear();
        navigate("/login");
      }
    }
  }

  //Get All Notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance("/get-all-notes");
      if( response.data && response.data.notes ){
        setAllNotes(response.data.notes);
      }
    } 
    catch (error) {
      console.log("An unexpected error occurred. Please try again later.")
    }
  } 

  //Delete Note
  const deleteNote = async (data) => {
    const noteid = data._id;
    try{
        const response = await axiosInstance.delete("/delete-note/" + noteid);
        if( response.data && !response.data.error){
            showToastMessage("Note Deleted Successfully", "delete")
            getAllNotes();
        }
        else {
          console.error("Failed to delete note:", response.data.message);
          
        }
    }
    catch( error ){
        if( error.response && error.response.data && error.response.data.message ){
            console.log("An unexpected error occurred. Please try again later.");
            
        }
    }
  };

  //Search Notes  
  const onSearchNote = async (query) => {
    try{
      const response = await axiosInstance.get("/search-notes", {
        params:{
          query
        }
      });

      if( response.data && response.data.notes ){
        setIsSearch(true);
        setAllNotes(response.data.notes);
      }
    }
    catch( error ){
      console.log(error);
    }
  }

  //Update IsPinned Value
  const updateIsPinned = async (noteData) => {
    const noteid = noteData._id;
    try{
        const response = await axiosInstance.put("/update-note-isPinned/" + noteid, {
            isPinned: !noteData.isPinned
        });
        if( response.data && response.data.note){
            showToastMessage("Note Updated Successfully", "edit")
            getAllNotes();
        }
    }
    catch( error ){
        console.log(error);
    }
  };

  useEffect( ()=> {
    getAllNotes();
    getUserInfo();
    return () => {

    }
  }, [])

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-neutral-900 '>
        <Navbar 
          userInfo={userInfo} 
          onSearchNote={onSearchNote}
          handleClearSearch={handleClearSearch}
        />
      
      {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 mt-8 mx-3 sm:mx-4 */}

      <div className='container mx-auto pt-5 pb-5 md:pt-16 flex-grow'>
       {
        allNotes.length > 0 ?
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-5 mt-8 mx-6 sm:mx-4 md:mx-7'>{allNotes.map( (item, index) => (
            <div className=''>
              <NoteCard 
              key={item._id}
                title={item.title} 
                date={item.createdOn}
                content={item.content}
                tags={item.tags}
                isPinned={item.isPinned}
                onEdit={ () => handleEdit(item) }
                onDelete={ () => deleteNote(item) }
                onPinnedNote={ () => updateIsPinned(item) }
            />
            </div> 
          ))}
       </div> : 
       <EmptyCard 
        imgSrc={isSearch ? NoDataImg : (AddNotesImg)} 
        message={ isSearch 
          ? `Oops! No notes found matching your search.`
          : `Start creating your first note! Click 'Add' button to jot down your thoughts, ideas and reminders. Let's get started!` }  
        />
       }
      </div>

      <button 
        className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 fixed right-10 bottom-9 hover:scale-125 transition-all ease-in-out' 
        onClick={ () => { setOpenAddEditModal( {
          isShown: true,
          type: "add",
          data: null
        })} }
        > 
        <MdAdd className='text-[32px] text-white' />
      </button>

      <Modal 
        isOpen={openAddEditModal.isShown}
        onRequestClose={ ()=> {} }
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.2)',
            backdropFilter: 'blur(3px)'
          },
        }}
        contentLabel=''
        className='w-[90%] sm:w-[70%] md:w-[40%] max-h-[80%] bg-white dark:bg-neutral-900 rounded-md mx-auto mt-14 p-4 overflow-y-scroll  overscroll-contain'>


        <AddEditNotes 
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose = { () => {
            setOpenAddEditModal(
              {
                isShown: false,
                type: "add",
                data: null
              }
            )
            }}
            getAllNotes={getAllNotes}
            showToastMessage={showToastMessage}
        />

      </Modal>

      <Toast 
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />
    </div>
  )
}
export default Dashboard
