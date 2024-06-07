import Note from "./Note";
import Modal from "./Modal";

const Notes =({data})=>{



const submittedNotes = data.map((note)=>{
    return <>
    <Note key={note.id} note={note}/>
    
    </>
})

    return <div className="notes" style={{ width:"calc(100vw - 190px)",marginLeft:"170px"}}>
        {data.length == 0 ? <h2 style={{color:"red",marginTop:"120px"}}>no notes to display</h2> : submittedNotes}
       
    </div>
}

export default Notes;