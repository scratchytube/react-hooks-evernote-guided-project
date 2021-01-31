import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notesData, setNotesData] = useState([])
  const [singleNoteDetail, setSingleNoteDetail] = useState({})
  const [noteBeenClicked, setNoteBeenClicked] = useState(false)
  const [editBeenClicked, seEditBeenClicked] = useState(false)
  

    useEffect(() => {
      fetch(`http://localhost:3000/api/v1/notes`)
      .then((r) => r.json())
      .then (notesTime =>
        setNotesData(notesTime))
    },
    []
    )
    console.log(notesData)

    const notesDetail = singleNote => {
      setSingleNoteDetail(singleNote)
      setNoteBeenClicked(true)
    }
    // console.log(singleNoteDetail)

    const editClickNoteHandler = () => {
      seEditBeenClicked((editBeenClicked) => !editBeenClicked)
    }

    const handleUpdatedNote = editedNote => {
      const updatedNoteArray = notesData.map(superNote => (
        superNote.id === editedNote.id ? editedNote : superNote
      ))
      setNotesData(updatedNoteArray)
    }


  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notesData={notesData} notesDetail={notesDetail} />
        <Content singleNoteDetail={singleNoteDetail} noteBeenClicked={noteBeenClicked} editClickNoteHandler={editClickNoteHandler} handleUpdatedNote={handleUpdatedNote} editBeenClicked={editBeenClicked}/>
      </div>
    </>
  );
}

export default NoteContainer;
