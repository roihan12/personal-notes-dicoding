import React from "react";
import { getInitialData } from "../utils";
import NoteAppHeader from "./NoteAppHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeywords: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteEventHandler = this.onArchiveNoteEventHandler.bind(this);
    this.onSearchNoteEventHandler = this.onSearchNoteEventHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteEventHandler(id) {
    const archiveNote = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes: archiveNote });
  }

  onSearchNoteEventHandler(event) {
    this.setState(() => {
      return {
        searchKeywords: event.target.value,
      };
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title
        .toLocaleLowerCase()
        .includes(this.state.searchKeywords.toLocaleLowerCase())
    );
    return (
      <>
        <NoteAppHeader onSearchNote={this.onSearchNoteEventHandler} />
        <div className="note-app__body ">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif : </h2>
          {filteredNotes.filter((note) => note.archived === false).length ===
          0 ? (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          ) : (
            <NoteList
              notes={filteredNotes.filter((note) => note.archived === false)}
              onDelete={this.onDeleteNoteHandler}
              onArchive={this.onArchiveNoteEventHandler}
            />
          )}

          <h2>Arsip : </h2>
          {filteredNotes.filter((note) => note.archived === true).length ===
          0 ? (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          ) : (
            <NoteList
              notes={filteredNotes.filter((note) => note.archived === true)}
              onDelete={this.onDeleteNoteHandler}
              onArchive={this.onArchiveNoteEventHandler}
            />
          )}
        </div>
      </>
    );
  }
}

export default NoteApp;
