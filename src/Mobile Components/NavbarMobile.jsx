import React, { useContext, useEffect, useState } from 'react'
import './NavbarMobile.css'
import { NotesAppContext } from '../Components/NotesAppContext'
import BackButton from './MobileBack.png'

export default function NavbarMobile() {
    const {changeViewNotes, allGroups, setChangeViewNotes} = useContext(NotesAppContext)
    const [smallFontSize, setSmallFontSize] = useState(false)
    useEffect(()=>{
        if(changeViewNotes.length>20)
        setSmallFontSize(true)
    }, [])
  return (
    <>{
    changeViewNotes &&
    <div className='NavbarMobile'>
        <img src={BackButton} alt="Back" onClick={()=>{setChangeViewNotes("")}} />
        <button style={{background: allGroups[changeViewNotes].color}}>{changeViewNotes.substring(0, 2).toUpperCase()}</button>
        {!smallFontSize &&<span>{changeViewNotes}</span>}
        {smallFontSize &&<span style={{fontSize: "0.7rem"}}>{changeViewNotes}</span>}
    </div>}
    </>
  )
}
