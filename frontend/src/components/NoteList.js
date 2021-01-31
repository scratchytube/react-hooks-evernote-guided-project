import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notesData, notesDetail }) {
  
  const notesMapper = notesData.map(note => (
    <NoteItem key={note.id} notes={note} notesDetail={notesDetail} />
  ))

  return (
    <ul>
     {notesMapper}
      
    </ul>
  );
}

export default NoteList;
