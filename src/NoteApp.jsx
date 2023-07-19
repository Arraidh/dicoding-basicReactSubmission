import React from "react";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const Notes = this.state.Notes.filter((note) => note.id !== id);
    this.setState({ Notes });
  }

  render() {
    return (
      <div className="note-app__body">
        <h2>Note App</h2>
        <NoteList notes={this.state.Notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NoteApp;
