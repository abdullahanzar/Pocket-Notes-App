import React from 'react'
import NavbarMobile from './NavbarMobile'
import NoteField from './NoteField'

export default function NotesView() {
  return (
    <div>
        {<NavbarMobile />}
        <NoteField />
    </div>
  )
}
