import React, { useState } from "react";

function NoteEditor({ singleNoteDetail, handleUpdatedNote }) {
  const {id, title, body} = singleNoteDetail

  const [titleOnForm, setTitleOnForm] = useState(title)
  const [bodyOnForm, setBodyOnForm] = useState(body)

  const saveEditedNote = e => {
    e.preventDefault()

    const updatedNote = {
      title: titleOnForm,
      body: bodyOnForm
    }

    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(updatedNote),
      })
        .then(response => response.json())
        .then(brandNewNote => {
          handleUpdatedNote(brandNewNote);
      })
  }

  

  return (
    <form onSubmit={saveEditedNote} className="note-editor">
      <input type="text" name="title" value={titleOnForm} onChange={(e) => setTitleOnForm(e.target.value)} />
      <textarea name="body" value={bodyOnForm} onChange={(e) => setBodyOnForm(e.target.value)} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
