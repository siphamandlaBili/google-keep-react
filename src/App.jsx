import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import FormInactive from './components/FormInactive';
import Modal from './components/Modal';
import Notes from './components/Notes';





function App() {

  return (
    <>
      <Navbar/>
      <Sidebar />
        <main style={{paddingTop:"60px"}}>
        <FormInactive/>
        <Notes/>
        </main>
        <Modal/>
     
      
    </>
 
  )
}

export default App
