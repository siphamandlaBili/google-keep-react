import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FormInactive from './components/FormInactive';
import Modal from './components/Modal';
import Notes from './components/Notes';
import notes from './data';
import { useState,useEffect } from 'react';





function App() {
 const [data,isData] = useState(notes)
 const [title,isTitle] = useState("");
 const [note,isNote] = useState("");
 const [active, inactive] = useState(true);

 

 
 
//  useEffect(() => {

//    localStorage.setItem('amazing', JSON.stringify(data));
   
//    console.log(storedData)
   
//   },[data]);

  const storedData = localStorage.getItem('amazing');
  return (
    <>
      <Navbar/>
      <Sidebar />
        <main style={{paddingTop:"60px"}}>
        <FormInactive data={data} isData={isData} title={title} isTitle={isTitle} note={note} isNote={isNote}  active={active} inactive={inactive}/>
        <Notes data={data} isData={isData} title={title} isTitle={isTitle} note={note} isNote={isNote} active={active} inactive={inactive} />
        </main>
        {/* <Modal/> */}
     
      
    </>
 
  )
}

export default App
