import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";

function NoteItem({ note, onDelete }) {
  // console.log(note);
  return (
    <div className="note-item">
      <NoteItemBody {...note} />
      <DeleteButton id={note.id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;
