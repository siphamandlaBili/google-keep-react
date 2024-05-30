import notes from "../data";
import Note from "./Note";


const submittedNotes = notes.map((note)=>{
    return <Note key={note.id} note={note}/>
})

console.log(submittedNotes)

const Notes =()=>{
    return <div className="notes" style={{ width:"calc(100vw - 190px)",marginLeft:"170px"}}>
        {submittedNotes}
    </div>
}

export default Notes;