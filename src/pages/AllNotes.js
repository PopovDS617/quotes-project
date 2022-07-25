import NoteList from "../components/notes/NoteList";
import React from "react";

export const DUMMY_NOTES = [
  { id: "n1", author: "John", text: "Went to San-Marino" },
  { id: "n2", author: "Jack", text: "Went to Argentina" },
  { id: "n3", author: "Jenn", text: "Went to Albania" },
  { id: "n4", author: "Jerry", text: "Went to Italy" },
  { id: "n5", author: "Johanna", text: "Went to the UK" },
  { id: "n6", author: "Joan", text: "Went to Spain" },
  { id: "n7", author: "Jennifer", text: "Went to South Africa" },
];

const AllNotes = () => {
  return (
    <React.Fragment>
      <h1>All notes page</h1>
      <NoteList notes={DUMMY_NOTES} />
    </React.Fragment>
  );
};

export default AllNotes;
