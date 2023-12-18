import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHander = this.onBodyChangeEventHander.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const karakterLimit = 50;
    this.setState(() => {
      return {
        title: event.target.value.slice(0, karakterLimit),
      };
    });
  }

  onBodyChangeEventHander(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }
  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan </h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa Input Karakter : {50 - this.state.title.length}
          </p>
          <input
            type="text"
            className="note-input__title"
            placeholder="Ini adalah Judul ..."
            required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            type="text"
            className="note-input__body"
            placeholder="Tulis Catatan ..."
            required
            value={this.state.body}
            onChange={this.onBodyChangeEventHander}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
