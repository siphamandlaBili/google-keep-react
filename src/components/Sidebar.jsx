import { useState } from "react";


const Sidebar =()=>{
  const [hoverState,setHoverState]=useState(true);

  const HoverStatesOpen = ()=>{
    setHoverState(false)
  }

  const HoverStatesClose = ()=>{
    setHoverState(true)
  }

    return <div className={hoverState?"sidebarHov":"sidebar"} onMouseEnter={HoverStatesOpen} onMouseLeave={HoverStatesClose}>
    <div className="sidebar-item">
      <span className="material-icons hover active">lightbulb</span>
      {hoverState?"":<span className="sidebar-text">Notes</span>}
    </div>
    <div className="sidebar-item">
      <span className="material-icons hover">notifications</span>
      {hoverState?"":<span className="sidebar-text">Reminders</span>}
    </div>
    <div className="sidebar-item">
      <span className="material-icons hover">edit</span>
      {hoverState?"":<span className="sidebar-text">Edit Labels</span>}
    </div>
    <div className="sidebar-item">
      <span className="material-icons hover">archive</span>
      {hoverState?"":<span className="sidebar-text">Archive</span>}
    </div>
    <div className="sidebar-item">
      <span className="material-icons hover">delete</span>
      {hoverState?"":<span className="sidebar-text">Trash</span>}
    </div>
  </div>
}

export default Sidebar;