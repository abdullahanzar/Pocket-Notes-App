import React, {useState, useEffect} from 'react'
import Pane from './Components/Pane'
import ViewNotes from './Components/ViewNotes'
import './App.css'
import './Components/NotesAppContext'
import { NotesAppContext } from './Components/NotesAppContext'

export default function App() {
  const [changeViewNotes, setChangeViewNotes] = useState("")
  const [allGroups, setAllGroups] = useState(JSON.parse(localStorage.getItem("Groups")))
  const [allNotes, setAllNotes] = useState({})
  useEffect(()=>{
    if(allGroups!=undefined && allGroups!=null) {
    const keys = Object.keys(allGroups)
    let tempObj = {}
    keys.forEach((item)=>{
      tempObj[item] = {note: "", time: ""}
    })
    setAllNotes(tempObj)
  }
  }, [allGroups])
  return (
    <div className='PocketNotesApp'>
      <NotesAppContext.Provider value={{allGroups, setAllGroups, allNotes, setAllNotes}}>
      <Pane setChangeViewNotes={setChangeViewNotes}/>
      <ViewNotes changeViewNotes={changeViewNotes}/>
      </NotesAppContext.Provider>
    </div>
  )
}
