import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({ onSearchNote }) {
  return (
    <div className="note-app__header">
      <h1>Notes App </h1>
      <NoteSearch onSearchNote={onSearchNote} />
    </div>
  );
}

export default NoteAppHeader;
