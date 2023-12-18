import React from 'react';

function Archive({id, onArchive, archived}){
    return(
        <button className="note-item__archive-button"
        onClick={() => onArchive(id)}
        >
        {archived ? "Pindahkan" : "Arsip"}
        </button>
    );
}

export default Archive;