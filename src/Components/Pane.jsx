import React from 'react'
import Group from './Group'
import CreateGroupPopUp from './CreateGroupPopUp'
import './Pane.css'

export default function Pane() {
  const CreateGroup = ()=>{
    console.log("CreateGroupLogging")
  }

  return (
    <div className='Pane'>
        <h1>Pocket Notes</h1>
        <button onClick={CreateGroup} className='P_CreateNotes'><span style={{fontWeight: 'bold', fontSize: '1.5rem'}}>+</span> &nbsp;&nbsp; Create Notes Group</button>
        <Group color="blue">Cuvette Notes</Group>
        <CreateGroupPopUp /> 
    </div>
  )
}

