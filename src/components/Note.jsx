import React from 'react'


  
function Note(props){

    function delNote(){
        props.onDelete(props.id);
    }
    
    
    return(
        <div className='note'>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={delNote} >DELETE</button>
        </div>
    );
}

export default Note;