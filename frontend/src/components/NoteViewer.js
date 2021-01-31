import React from "react";

function NoteViewer({ singleNoteDetail, editClickNoteHandler }) {
  return (
    <>
      <h2>{singleNoteDetail.title}</h2>
      <p>{singleNoteDetail.body}</p>
      <button onClick={() => editClickNoteHandler()} >Edit</button>
    </>
  );
}

export default NoteViewer;
