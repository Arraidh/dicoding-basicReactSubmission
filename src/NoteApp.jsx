import React from "react";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils/index";

function NoteApp() {
  const Notes = getInitialData();
  //   console.log(Notes);

  return (
    <div className="note-app__body">
      <h2>Note App</h2>
      <NoteList notes={Notes} />
    </div>
  );
}

export default NoteApp;
