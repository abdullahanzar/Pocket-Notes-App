import React, {useState, useEffect} from 'react'
import Group from './Group'
import CreateGroupPopUp from './CreateGroupPopUp'
import './Pane.css'

export default function Pane() {
  const [isCreateGroupSelected, setIsCreateGroupSelected] = useState(false)
  const [Groups, setGroups] = useState(JSON.parse(localStorage.getItem("Groups")))

  const CreateGroup = ()=>(setIsCreateGroupSelected(true))
  const ImplementGroup = (chosenName, chosenColor)=>{
    setGroups(prev=>({...prev, [chosenName]: {chosenName, chosenColor}}))
  }

  useEffect(()=>{
    localStorage.setItem("Groups", JSON.stringify(Groups))
  }, [Groups])
  
  return (
    <div className='Pane'>
        <h1>Pocket Notes</h1>
        <button onClick={CreateGroup} className='P_CreateNotes'><span style={{fontWeight: 'bold', fontSize: '1.5rem'}}>+</span> &nbsp;&nbsp; Create Notes Group</button>
        <div className='Groups'>
        <Group color="blue">Cuvette Notes</Group>
        {
          Groups && Object.values(Groups).map(
            (item, key) => (
              <Group color={item.chosenColor}  key={key}>{item.chosenName}</Group>
            )
          )
        }        
        {isCreateGroupSelected && <CreateGroupPopUp setSelected={setIsCreateGroupSelected} Implement={ImplementGroup}/>}   
        </div>
    </div>
  )
}

