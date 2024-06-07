const Modal =({active, inactive,data,nots,isData,note,isNote,title,isTitle})=>{



    return  <>{active?null : <div className="modal">
    <div className="modal-content">
      <div className="form-container">
        <form>
        <input type="text" className="note-title" placeholder="Title" defaultValue={nots.title} value={title}/>
        <input
          id="note-text"
          className="note-text"
          type="text"
          placeholder="Take a note..."
          defaultValue={nots.note}
          value={note}
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
            <button className="close-btn">Close</button>
          </div>
        </form>
      </div>
    </div>
  </div>}</>
}

export default Modal;