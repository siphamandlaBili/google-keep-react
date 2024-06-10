import { useState } from "react";

const Modal =({active, inactive,clickedNote,data,nots,isData,note,isNote,title,isTitle,isClickedNote})=>{

  const [updateTitle,setUpdateTitle] = useState("");
  const [updateNote,setUpdateNote] = useState("");

  const editNote =(e)=>{
    setUpdateNote(e.target.value)
  }
  const editTitle = (e)=>{
    setUpdateTitle(e.target.value)
    
    
  }
const closeModal =(e)=>{
  e.preventDefault();
  if(updateTitle !=="" && updateNote !=="" ){
    const newArr = data.map((el)=>{
      if(el.id == nots.id){
        nots.title = updateTitle
        nots.note = updateNote
      }
    })
  }

  if(updateTitle ==""){
    const newArr = data.map((el)=>{
      if(el.id == nots.id){
        nots.title = nots.title
        nots.note = updateNote
      }
    })
  }

  if(updateNote ==""){
    const newArr = data.map((el)=>{
      if(el.id == nots.id){
        nots.note = nots.note
        nots.title = updateTitle
      }
    })
  }
  
  isClickedNote(false)
 
}

    return  <>{clickedNote?<div className="modal">
    <div className="modal-content">
     
      <div className="form-container">
        <form>
        <input type="text" className="note-title" placeholder={nots.title} value={updateTitle} onChange={editTitle}/>
        <input
          id="note-text"
          className="note-text"
          type="text"
          placeholder={nots.note}
          onChange={editNote}
          value={updateNote}
        />
          <div className="form-actions" style={{    display: "flex",
    justifyContent: "space-between",
    margin: "10px"}}>
            <div className="icons">
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
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </form>
      </div>
    </div>
  </div>:null}</>
}

export default Modal;