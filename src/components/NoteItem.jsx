import React from "react";
import NoteItemBody from "./NoteItemBody";

function NoteItem({ note }) {
  // console.log(note);
  return (
    <div className="note-item">
      <NoteItemBody {...note} />
    </div>
  );
}

export default NoteItem;
