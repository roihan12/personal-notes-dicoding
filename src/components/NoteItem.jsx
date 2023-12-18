import React from "react";
import Delete from "./Delete";
import Archive from "./Archive";
import NoteItemBody from "./NoteItemBody";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <Delete id={id} onDelete={onDelete} />
      <Archive id={id} onArchive={onArchive} archived={archived} />
    </div>
  );
}

export default NoteItem;
