import React, { useState } from "react";

function CreateNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleNoteData = (event) => {
        const { name, value } = event.target;
        setNote((prevNote) => ({
            ...prevNote,
            [name]: value
        }));
    }

    function addNoteSubmission(event) {
        event.preventDefault();
        const newNote = {
            title: note.title,
            content: note.content
        }
        props.onAdd(newNote);
        clearFields();
    }

    function clearFields() {
        setNote({
            title: "",
            content: ""
        });
    }
    return (
        <>
            <form onSubmit={addNoteSubmission}>
                <input name="title" placeholder="Title" type="text" value={note.title} onChange={handleNoteData} />
                <textarea name="content" placeholder="Take a note..." row="3" value={note.content} onChange={handleNoteData} ></textarea>
                <button type="submit">Add</button>
            </form>
        </>
    );
}


export default CreateNote;