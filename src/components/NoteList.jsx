import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  //   console.log(notes);
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
