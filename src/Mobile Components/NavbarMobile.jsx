import React, { useContext } from 'react'
import './NavbarMobile.css'
import { NotesAppContext } from '../Components/NotesAppContext'

export default function NavbarMobile() {
    const {changeViewNotes, allGroups} = useContext(NotesAppContext)
  return (
    <div className='NavbarMobile'>
        <button style={{background: allGroups[changeViewNotes].color}}>{changeViewNotes.substring(0, 2).toUpperCase()}</button>
    </div>
  )
}
