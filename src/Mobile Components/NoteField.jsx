import React, { useContext, useEffect, useState } from 'react'
import './NoteField.css'
import { NotesAppContext } from '../Components/NotesAppContext'
import SubmitButton from '../Components/ViewNotesComponents/SubmitButton.png'

export default function NoteField() {
  const [presentNote, setPresentNote] = useState("")
  const {allGroups, changeViewNotes} = useContext(NotesAppContext)
  const [storedNote, setStoredNote] = useState([])
  const [storedTime, setStoredTime] = useState([])
  const storeNotes = () => {
    if(presentNote!="") {
    setStoredNote((prev)=>([...prev, presentNote]))
    setStoredTime((prev)=>([...prev, getTime()]))}
    setPresentNote("")
  }
  const getTime = () => {
    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+'\n'+time;
    return dateTime
  }
  useEffect(()=>{
    if(localStorage.getItem(`${changeViewNotes}`)!="" && localStorage.getItem(`${changeViewNotes}`)!=null 
      && localStorage.getItem(`${changeViewNotes}`)!=[null])
    {
      setStoredNote(localStorage.getItem(`${changeViewNotes}`).split(","))
      setStoredTime(localStorage.getItem(`${changeViewNotes}-time`).split(","))
    }
  }, [])
  useEffect(()=>{
    console.log(storedNote)
    console.log(storedTime)
    localStorage.setItem(`${changeViewNotes}`, storedNote)
    localStorage.setItem(`${changeViewNotes}-time`, storedTime)
  }, [storedNote, storedTime])
  return (
    <>
    <div className='NoteField'>
      {
        storedNote.map((item, index)=>(
          <div className='NF_individualNoteNode'>
          <p className='NF_timefield'>{storedTime[index]}</p>
          <p key={index} className='NF_notefield'>{item}</p>
          </div>
        ))
      }
    </div>
    <div className="textInputArea">
      <textarea name="textInputArea" id="textInputArea" className='textInputAreaMobile' placeholder='Enter your text here.....'
      value={presentNote} onChange={(e)=>{setPresentNote(e.target.value)}}
      onKeyDown={(e)=>{if(e.key=='Enter')storeNotes();}}></textarea>
      <button><img src={SubmitButton} alt="Submit" onClick={()=>{storeNotes()}}/></button>
    </div>
    </>
  )
}
