import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import savedNotes from "../notes";

let count=savedNotes.length+1;

function App() {

    const [notes, setNotes] = useState(savedNotes);

    function deleteNote(id) {
        setNotes((preNotes) => preNotes.filter((note) => note.key !== id));
    }

    function addNewNote(newNote) {
        setNotes((preNotes) => {
            const newKey=count++;
            console.log(newKey);
            return [...preNotes,{...newNote,key:newKey}]});

}

return (
    <>
        <Header />
        <Footer />
        <CreateNote onAdd={addNewNote} />
        {notes.map((note) => (
            <Note key={note.key} id={note.key} title={note.title} content={note.content} onDelete={deleteNote} />
        ))}

    </>
);


}

export default App;