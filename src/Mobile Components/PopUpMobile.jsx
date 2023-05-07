import React, {useContext, useEffect, useState} from 'react'
import ReactModal from 'react-modal'
import './PopUpMobile.css'
import { NotesAppContext } from '../Components/NotesAppContext'

export default function PopUpMobile(props) {
  const {allGroups, setAllGroups} = useContext(NotesAppContext)
  const [chosenName, setChosenName] = useState("")
  const [chosenColor, setChosenColor] = useState("")
  const [showColors, setShowColors] = useState(true)
  const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"]

  const chooseColor = (value)=>{
      setChosenColor(value)
      setShowColors(false)
  }

  const ImplementGroup = ()=>{
      if(chosenName=="" || chosenColor =="") {
      alert("Please enter a name and color.")
      }
      else {
      let tempObj = {}
      tempObj[chosenName] = {name: chosenName, color: chosenColor}
      setAllGroups((prev)=>({...prev, ...tempObj}))
      props.setShow(false)
      }
  }
  return (
    <ReactModal isOpen={props.show} contentLabel='Create New Group Pop Up' className="PopUpMobileCreateGroup" onRequestClose={()=>{props.setShow(false)}}>
        <h3>Create New Notes Group</h3>
        <h4>Group Name: </h4>
        <input type="text" value={chosenName} onChange={(e)=>{setChosenName(e.target.value)}} />
        <h4>Choose Color:</h4>
        <div className="PopUp_colors">
        { showColors &&
          colors.map((item, index) => (
            <button key={index} style={{background: `${item}`}} onClick={(e)=>{chooseColor(e.target.value)}} value={item}></button>
          ))
        }
        {!showColors && <button style={{background: chosenColor}}></button>}
        {!showColors && <span style={{color: `${chosenColor}`}} onClick={(()=>{setChosenColor(""); setShowColors(true)})}>Chose Wrong? Tap me!</span>}
        </div>
        <p>Tap anywhere outside to close.</p>
        <button style={{borderRadius: "6px"}} className='PopUpCreate' onClick={()=>{ImplementGroup()}}>Create</button>
    </ReactModal>
  )
}
