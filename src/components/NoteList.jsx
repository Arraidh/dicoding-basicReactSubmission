import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  //   console.log(notes);
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NoteList;
