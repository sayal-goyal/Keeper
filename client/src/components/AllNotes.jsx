import React from "react";
import Note from './Note'

const Notes = ({deleteNote, notes}) => {
    return (
        <div className="flex flex-wrap gap-5 px-8 py-6 w-full max-w-8xl">
            {notes.map((note,index) => (<Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>))}
        </div>
    )
}

export default Notes;