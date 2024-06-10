import Modal from "./Modal";
import { useState } from "react";
const Note = ({note, nots, data, title, isTitle, isNote, isData, inactive }) => {
    const [clickedNote, isClickedNote] = useState(false);
    // const [selected, setSelected] = useState(null);

    const viewModal = () => {
        isClickedNote(true)
        console.log(clickedNote)
    }

    const removeItem = (id) => {
        const newPeople = data.filter((note) => {
            return note.id !== id
        })
        isData(newPeople)
    }


    return <div className="note" >
        <div onClick={viewModal} >
        <div className="title">{nots.title == "" ? <p style={{ color: "red" }}>no title</p> : nots.title}</div>
        <div className="text">{nots.note}</div>
        </div>
        <div className="note-footer">
            {/* <div className="tooltip">
            <span className="material-icons hover small-icon">add_alert</span>
            <span className="tooltip-text">Remind me</span>
        </div> */}
            {/* <div className="tooltip">
            <span className="material-icons hover small-icon">person_add</span>
            <span className="tooltip-text">Collaborator</span>
        </div> */}
            {/* <div className="tooltip">
            <span className="material-icons hover small-icon">palette</span>
            <span className="tooltip-text">Change Color</span>
        </div> */}
            {/* <div className="tooltip">
            <span className="material-icons hover small-icon">image</span>
            <span className="tooltip-text">Add Image</span>
        </div> */}
            <div className="tooltip archive">
                <span className="material-icons hover small-icon" id="delete" onClick={() => { removeItem(nots.id) }} >delete</span>
                <span className="tooltip-text" >delete</span>
            </div>
            <div className="tooltip">
                <span className="material-icons hover  small-icon" id="edit" onClick={viewModal} >edit</span>
                <span className="tooltip-text">edit</span>
            </div>
        </div>
        {clickedNote ? <Modal nots={nots} data={data} clickedNote={clickedNote} isTitle={isTitle} isNote={isNote} isData={isData} note={note} isClickedNote={isClickedNote} inactive={inactive} title={title} /> : null}
    </div>
}

export default Note;