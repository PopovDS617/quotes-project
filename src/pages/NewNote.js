import React from "react";
import NoteForm from "../components/notes/NoteForm.js";

const NewNote = () => {
  const addNoteHandler = (noteData) => {
    console.log(noteData);
  };

  return <NoteForm onAddNote={addNoteHandler} />;
};

export default NewNote;
