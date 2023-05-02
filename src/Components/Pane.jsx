import React, {useState, useEffect} from 'react'
import Group from './Group'
import CreateGroupPopUp from './CreateGroupPopUp'
import './Pane.css'

export default function Pane() {
  const [isCreateGroupSelected, setIsCreateGroupSelected] = useState(false) /*Here isCreateGroupExitedX is used when the user exits without entering the details through the X button*/
  const [isCreateGroupExitedX, setIsCreateGroupExitedX] = useState(false) /*However if the user enters the info and creates a group isCreateGroupSelected turns to false*/
  const [Groups, setGroups] = useState(JSON.parse(localStorage.getItem("Groups")))

  const CreateGroup = ()=>(setIsCreateGroupSelected(true), setIsCreateGroupExitedX(true))
  const ImplementGroup = (chosenName, chosenColor)=>{
    //let groupInfo = [chosenName, chosenColor]
    //setGroups(prev=>[prev, groupInfo])
    setGroups(prev=>({...prev, [chosenName]: {chosenName, chosenColor}}))
    localStorage.setItem("Groups", JSON.stringify(Groups))
    console.log(Groups)
  }

  return (
    <div className='Pane'>
        <h1>Pocket Notes</h1>
        <button onClick={CreateGroup} className='P_CreateNotes'><span style={{fontWeight: 'bold', fontSize: '1.5rem'}}>+</span> &nbsp;&nbsp; Create Notes Group</button>
        <Group color="blue">Cuvette Notes</Group>
        {
          Object.values(Groups).map(
            (item, key) => (
              <Group color={item.chosenColor}>{item.chosenName}</Group>
            )
          )
        }        
        {isCreateGroupExitedX && isCreateGroupSelected && <CreateGroupPopUp setSelected={setIsCreateGroupSelected} setExited={setIsCreateGroupExitedX} Implement={ImplementGroup}/>}   
    </div>
  )
}

