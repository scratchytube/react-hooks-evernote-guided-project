import React from "react";
import NoteList from "./NoteList";

function Sidebar( { notesData, notesDetail } ) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notesData={notesData} notesDetail={notesDetail} />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
