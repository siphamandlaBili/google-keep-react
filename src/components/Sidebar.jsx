const Sidebar =()=>{
    return <div className="sidebar">
    <div className="sidebar-item">
      <span className="material-icons hover active">lightbulb</span>
      <span className="sidebar-text">Notes</span>
    </div>
    <div className="sidebar-item">
      <span className="material-icons hover">notifications</span>
      <span className="sidebar-text">Reminders</span>
    </div>
    <div className="sidebar-item">
      <span className="material-icons hover">edit</span>
      <span className="sidebar-text">Edit Labels</span>
    </div>
    <div className="sidebar-item">
      <span className="material-icons hover">archive</span>
      <span className="sidebar-text">Archive</span>
    </div>
    <div className="sidebar-item">
      <span className="material-icons hover">delete</span>
      <span className="sidebar-text">Trash</span>
    </div>
  </div>
}

export default Sidebar;