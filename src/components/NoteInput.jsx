import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <>
        <form className="note-input" onSubmit={this.onSubmitEventHandler}>
          <h2>Tambah Catatan</h2>
          <input
            type="text"
            placeholder="Judul Catatan"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            type="text"
            placeholder="Tuliskan catatan anda di sini..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button>Buat</button>
        </form>
      </>
    );
  }
}

export default NoteInput;
