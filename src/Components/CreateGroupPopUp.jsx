import React, {useState, useEffect, useRef} from 'react'
import './CreateGroupPopUp.css'

export default function CreateGroupPopUp() {
    const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"]
    const [chosenColor, setChosenColor] = useState("")
    const [chosenName, setChosenName] = useState("")
    const [disabled, setDisabled] =useState(false)
  return (
    <div className="CG_Everything">
    <div className='CG_PopUp'>
        <h3>Create New Notes Group</h3>
        <label htmlFor="GroupName">
        Group Name: <input type="text" name='GroupName' id='GroupName' placeholder='Enter your group name....'/>
        </label>
        <label htmlFor='GroupColor'>Choose Color:
        {
            colors.map((item, index) => (
                <input style={{background:`${item}`}} onClick={()=>{
                    setChosenColor(`${item}`)
                    setDisabled(true)
                    console.log(chosenColor)
                }} key={index} type='button' disabled={disabled}/>
             ))
        }
        </label>
    </div>
    </div>
  )
}
