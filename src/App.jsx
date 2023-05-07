import React, {useState, useEffect} from 'react'
import Pane from './Components/Pane'
import ViewNotes from './Components/ViewNotes'
import './App.css'
import './Components/NotesAppContext'
import { NotesAppContext } from './Components/NotesAppContext'
import ViewHolder from './Mobile Components/ViewHolder'
import MobileNotesView from './Mobile Components/MobileNotesView'

export default function App() {
  const [changeViewNotes, setChangeViewNotes] = useState("")
  const [allGroups, setAllGroups] = useState(JSON.parse(localStorage.getItem("Groups")))
  const [isWebView, setIsWebView] = useState(true)
  useEffect(()=>{
    if(window.innerWidth<=600)
    setIsWebView(false)
  }, [])
  return (
    <>
    { isWebView ?
    <div className='PocketNotesApp'>
      <NotesAppContext.Provider value={{allGroups, setAllGroups}}>
      <Pane setChangeViewNotes={setChangeViewNotes}/>
      <ViewNotes changeViewNotes={changeViewNotes}/>
      </NotesAppContext.Provider>
    </div> 
    :
    <NotesAppContext.Provider value={{allGroups, setAllGroups, changeViewNotes, setChangeViewNotes}}>
    <div className='PocketNotesAppMobileView'>
      <ViewHolder />
      <MobileNotesView />
    </div>
    </NotesAppContext.Provider>
    }
    </>
  )
}
