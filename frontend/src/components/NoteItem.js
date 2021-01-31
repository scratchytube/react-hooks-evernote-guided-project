import React from "react";

function NoteItem({ notes, notesDetail }) {

 
  
  return (
    <li onClick={() => notesDetail(notes)}>
      <h2>{notes.title}</h2>
      <p>{notes.body.slice(0, 20)} </p>
      
    </li>
  );
}

export default NoteItem;
