import React, { useContext, useEffect } from 'react'
import './Collection.css'
import { NotesAppContext } from '../Components/NotesAppContext'

export default function Collection(props) {
  const {setChangeViewNotes, changeViewNotes} = useContext(NotesAppContext)
  return (
    <div className='Collection' onClick={()=>{setChangeViewNotes(props.name)}}>
        <button style={{background: `${props.color}`}}>{props.name.substring(0, 2).toUpperCase()}</button>
        <span>{props.name}</span>
    </div>
  )
}
