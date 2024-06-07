import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FormInactive from './components/FormInactive';
import Modal from './components/Modal';
import Notes from './components/Notes';
import notes from './data';
import { useState } from 'react';





function App() {
 const [data,isData] = useState(notes)
  return (
    <>
      <Navbar/>
      <Sidebar />
        <main style={{paddingTop:"60px"}}>
        <FormInactive data={data} isData={isData}/>
        <Notes data={data}/>
        </main>
        {/* <Modal/> */}
     
      
    </>
 
  )
}

export default App
