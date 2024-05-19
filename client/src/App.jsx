import React, {useState} from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import AllNotes from "./components/AllNotes"
import CreateArea from './components/CreateArea'

const App = () => {

    const [notes,setNotes] = useState([])
    const addNote = (Note) => {
        setNotes((preState) => {
            return [...preState,Note]
        })
    }
    const deleteNote = (NoteId) => {
        setNotes((preState) => {
            return preState.filter((note,index)=>{
                return index !== NoteId
            })
        })
    }

    return (
        <div className='flex flex-col h-screen w-screen gap-8'>
            <Header/>
            <CreateArea onAdd={addNote}/>
            <AllNotes deleteNote={deleteNote} notes={notes}/>
            <Footer/>
        </div>
    )
}

export default App;