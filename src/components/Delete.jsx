import React from 'react';

function Delete({id, onDelete}){
    return(
        <button 
        className='note-item__delete-button'
        onClick={() => onDelete(id)}
        >
        Hapus
        </button>
    );
}

export default Delete;