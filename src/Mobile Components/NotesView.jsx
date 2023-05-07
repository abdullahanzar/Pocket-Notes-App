import React from 'react'
import NavbarMobile from './NavbarMobile'
import NoteField from './NoteField'
import './NotesView.css'

export default function NotesView() {
  return (
    <div>
        <div className='NotesView'>
        <NavbarMobile />
        <NoteField />
        </div>
    </div>
  )
}
