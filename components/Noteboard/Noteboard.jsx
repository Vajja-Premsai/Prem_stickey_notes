import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from 'react-bootstrap'

import StickyNote from '../Stickynote/Stickynote'

//require("downloadjs")(data, strFileName, strMimeType);
// downloadjs

export default function NoteBoard () {
    
    // array of sticky note ids
    const [list, setList] = React.useState([])

    // counter for total number of stickies
    const [number, setNumber] = React.useState(1);

    /*************************************************/
    /* methods to work with the notes */
    /*************************************************/
    
    // create a new blank note
    function newNote() {
        const newList = list.concat({ count: number, uuid: uuidv4(), title: null, body: null });
        setList(newList);

        // move the counter forward and resave
        setNumber(number+1);
    }

    // clear out the List array and reset the Number of notes
    function deleteNotes() {
        setList([]);
        setNumber(1);
    }

    // trigger a blank re-render of all StickyNotes by changing the unique Key IDs
    function clearNotes() {
        const newList = list.map(entry => {
            entry.uuid = uuidv4();
            entry.title = null;
            entry.body = null;
            return entry;
        });
        setList(newList);
    }

    /*
    function saveNotes() {
        console.log("save this noteboard");
        //download("hello world", "react-text.txt", "text/plain");
    }

    function loadNotes () {
        console.log("load a saved noteboard");
    }
    */

    return (

        <section id="note-board" className="sticky-wrap">

            <Button onClick={newNote} variant="success" id="new-btn" className="dash-btn">New Note</Button>
            <Button onClick={clearNotes} variant="warning" id="clear-btn" className="dash-btn">Clear All</Button>
            <Button onClick={deleteNotes} variant="danger" id="delete-btn" className="dash-btn">Delete All</Button>

            {/*
            <span id="sticky-btn-spacer"></span>

            <Button onClick={saveNotes} id="save-btn" className="dash-btn">Save Board</Button>
            <Button onClick={loadNotes} id="load-btn" className="dash-btn">Load Board</Button>
            */}

            <div id="sticky-notes">
                {
                    list.map(note => (
                        <StickyNote key={note.uuid} count={note.count} />
                    ))
                }
            </div>
        
        </section>
    )
}
