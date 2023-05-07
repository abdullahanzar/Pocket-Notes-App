import React, { useContext, useEffect, useState } from 'react'
import { NotesAppContext } from '../Components/NotesAppContext'
import NotesView from './NotesView'
import Navbar from '../Components/ViewNotesComponents/Navbar'

export default function MobileNotesView() {
    const [mountMobileNotesView, setmountMobileNotesView] = useState(false)
    const {changeViewNotes} = useContext(NotesAppContext)
    useEffect(()=>{
        if(changeViewNotes!=""&&changeViewNotes!=null)
        setmountMobileNotesView(true)
        else
        setmountMobileNotesView(false)
    }, [changeViewNotes])
  return (
    <>
    {
    mountMobileNotesView &&
    <div>
        {<NotesView />}
    </div>
    }
    </>
  )
}
