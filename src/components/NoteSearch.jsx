import React from "react";

const NoteSearch = ({ onSearchNote }) => {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan..."
        onChange={onSearchNote}
      />
    </div>
  );
};

export default NoteSearch;
