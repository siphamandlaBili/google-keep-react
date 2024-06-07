import { useState } from 'react';
// import data from "../data"


const FormInactive = ({data,isData}) => {
  const [active, inactive] = useState(true);
 
  const toggleForm = ()=>{
     inactive(false);
  }

  const closeForm =(e)=>{
     e.preventDefault();
     inactive(true)
  }

  const [title,isTitle] = useState("");
  const [note,isNote] = useState("");
  
  const addtitle = (e)=>{
  isTitle(e.target.value);
  }

  const addNote = (e)=>{
    isNote(e.target.value);
  }
  
  const logNote = (e)=>{
    e.preventDefault()
    const singleNoteAdd = {id:data.length + 1,title,note};
    isTitle("");
    isNote('');
    isData([...data,singleNoteAdd]);
    console.log(data)
  }

  return <> {active ? <div className="form-container inactive-form" >
    <form style={{display:"flex"}} onClick={toggleForm}>
      <input className="note-text" type="text" placeholder="Take a note..." />
      <div className="form-actions">
        <div className="tooltip">
          <span className="material-icons hover">check_box</span>
          <span className="tooltip-text">New List</span>
        </div>
        <div className="tooltip">
          <span className="material-icons hover">brush</span>
          <span className="tooltip-text">New Drawing</span>
        </div>
        <div className="tooltip">
          <span className="material-icons hover">image</span>
          <span className="tooltip-text">New Image</span>
        </div>
      </div>
    </form>
  </div> 
  
  :


    <div className="form-container active-form">
      <form>
        <input type="text" className="note-title" placeholder="Title" value={title} onChange={addtitle} />
        <input
          id="note-text"
          className="note-text"
          type="text"
          placeholder="Take a note..."
          value={note} onChange={addNote}
        />
        <div className="form-actions" style={{    display: "flex",
    justifyContent: "space-between",
    margin: "10px"}}>
          <div className="icons" style={{display:"flex",flexDirection:"row", }}>
            <div className="tooltip">
              <span className="material-icons hover small-icon"
              >add_alert</span
              >
              <span className="tooltip-text">Remind me</span>
            </div>
            <div className="tooltip">
              <span className="material-icons hover small-icon"
              >person_add</span
              >
              <span className="tooltip-text">Collaborator</span>
            </div>
            <div className="tooltip">
              <span className="material-icons hover small-icon"
              >palette</span
              >
              <span className="tooltip-text">Change Color</span>
            </div>
            <div className="tooltip">
              <span className="material-icons hover small-icon"
              >image</span
              >
              <span className="tooltip-text">Add Image</span>
            </div>
            <div className="tooltip">
              <span className="material-icons hover small-icon"
              >archive</span
              >
              <span className="tooltip-text">Archive</span>
            </div>
            <div className="tooltip">
              <span className="material-icons hover small-icon"
              >more_vert</span
              >
              <span className="tooltip-text">More</span>
            </div>
            <div className="tooltip">
              <span className="material-icons hover small-icon"
              >undo</span
              >
              <span className="tooltip-text">Undo</span>
            </div>
            <div className="tooltip">
              <span className="material-icons hover small-icon"
              >redo</span
              >
              <span className="tooltip-text">Redo</span>
            </div>
          </div>
          <button className="close-btn" onClick={logNote}>Close</button>
        </div>
      </form>
    </div>}
  </>
}

export default FormInactive;