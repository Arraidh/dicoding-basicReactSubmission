import React from "react";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils/index";
import NoteInput from "./components/NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const Notes = this.state.Notes.filter((note) => note.id !== id);
    this.setState({ Notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        Notes: [
          ...prevState.Notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        {this.state.Notes.length != 0 ? (
          <NoteList notes={this.state.Notes} onDelete={this.onDeleteHandler} />
        ) : (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        )}
      </div>
    );
  }
}

export default NoteApp;
