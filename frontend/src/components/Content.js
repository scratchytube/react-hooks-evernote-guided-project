import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/


function Content({ singleNoteDetail, noteBeenClicked, editClickNoteHandler, editBeenClicked, handleUpdatedNote }) {
  
  

  const getContent = () => {
    if (editBeenClicked) {
      return <NoteEditor singleNoteDetail={singleNoteDetail} handleUpdatedNote={handleUpdatedNote} />;
    } else if ( noteBeenClicked === true ) {
      return <NoteViewer singleNoteDetail={singleNoteDetail} editClickNoteHandler={editClickNoteHandler} />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
