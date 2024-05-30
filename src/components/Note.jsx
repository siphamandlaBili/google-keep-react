const Note = ({note}) =>{
    
    return <div className="note">
    <span className="material-icons check-circle">check_circle</span>
    <div className="title">{note.title}</div>
    <div className="text">{note.note}</div>
    <div className="note-footer">
        <div className="tooltip">
            <span className="material-icons hover small-icon">add_alert</span>
            <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
            <span className="material-icons hover small-icon">person_add</span>
            <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
            <span className="material-icons hover small-icon">palette</span>
            <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
            <span className="material-icons hover small-icon">image</span>
            <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip archive">
            <span className="material-icons hover small-icon">archive</span>
            <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip">
            <span className="material-icons hover small-icon">more_vert</span>
            <span className="tooltip-text">More</span>
        </div>
    </div>
</div>
}

export default Note;