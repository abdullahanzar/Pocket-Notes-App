import React from 'react'
import Pane from './Components/Pane'
import ViewNotes from './Components/ViewNotes'
import './App.css'

export default function App() {
  return (
    <div className='PocketNotesApp'>
      <Pane />
      <ViewNotes />
    </div>
  )
}
