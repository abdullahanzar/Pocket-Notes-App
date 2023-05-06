import React, {useContext, useEffect, useState} from 'react'
import './Notes.css'
import { NotesAppContext } from '../NotesAppContext'

export default function Notes(props) {
    const {allNotes, setAllNotes} = useContext(NotesAppContext)
    const [currentNotes, setCurrentNotes] = useState("")
    const [storedNotesArray, setStoredNotesArray] = useState([localStorage.getItem(`${props.name}`)])
    const [timeStampArray, setTimeStampArray] = useState([localStorage.getItem(`${props.name}-time`)])
    const registerNotes = ()=>{
        setStoredNotesArray(prev=>([...prev, currentNotes]))
        setTimeStampArray(prev=>([...prev, getTime()]))
    }
    const getTime = () => {
        let today = new Date();
        let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+'\n'+time;
        return dateTime
    }

    useEffect(()=>{
        setStoredNotesArray([localStorage.getItem(`${props.name}`)])
        setTimeStampArray([localStorage.getItem(`${props.name}-time`)])
    }, [props.name])

    useEffect(()=>{
        localStorage.setItem(`${props.name}`, storedNotesArray)
        allNotes[props.name].note = storedNotesArray
        localStorage.setItem("Notes", JSON.stringify(allNotes))
    }, [storedNotesArray])
    useEffect(()=>{
        localStorage.setItem(`${props.name}-time`, timeStampArray)
        allNotes[props.name].time = timeStampArray
        localStorage.setItem("Notes", JSON.stringify(allNotes))
    })
  return (
    <div className='Notes'>
        <div className="showNotes">
            {
                storedNotesArray.map((item)=>(
                    <p>{item}</p>
                ))
            }
        </div>
        <div className="textpane">
            <textarea className='inputArea' placeholder='Enter your text here.' autoFocus={true} value={currentNotes} onChange={(e)=>{setCurrentNotes(e.target.value)}}
            onKeyDown={(e)=>{if(e.shiftKey && e.key=="Enter")
                            registerNotes()}}></textarea>
            <button type="submit" onClick={registerNotes}>Submit</button>
        </div>
    </div>
  )
}

