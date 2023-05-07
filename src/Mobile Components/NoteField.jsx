import React, { useState } from 'react'
import './NoteField.css'

export default function NoteField() {
  const [presentNote, setPresentNote] = useState("") 
  return (
    <>
    <div className='NoteField'>
        
    </div>
    <div className="textInputArea">
      <textarea name="textInputArea" id="textInputArea" className='textInputAreaMobile' placeholder='Enter your text here.....'
      value={presentNote} onChange={(e)=>{setPresentNote(e.target.value)}}></textarea>
    </div>
    </>
  )
}
