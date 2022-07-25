import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedNote from "../components/notes/HighlightedNote";
import { DUMMY_NOTES } from "./AllNotes";

const NoteDetail = () => {
  const params = useParams();

  const notesList = [...DUMMY_NOTES];

  const note = notesList.find((item) => item.id === params.noteId);

  return (
    <React.Fragment>
      <h1>Note detail page</h1>
      {!note && <HighlightedNote text={"No note found"} author={""} />}
      {note && <HighlightedNote text={note.text} author={note.author} />}
      <Route path={`/notes/${params.noteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default NoteDetail;
