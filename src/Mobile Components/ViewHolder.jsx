import React, { useContext, useEffect, useState } from 'react'
import './ViewHolder.css'
import { NotesAppContext } from '../Components/NotesAppContext'
import PopUpMobile from './PopUpMobile'
import Collection from './Collection'

export default function ViewHolder() {
    const {allGroups, changeViewNotes} = useContext(NotesAppContext)
    const [mountViewHolder, setMountViewHolder] = useState(true)
    const [showGroups, setShowGroups] = useState(false)
    const [isCreateGroupSelected, setIsCreateGroupSelected] = useState(false)
    useEffect(()=>{if(allGroups!="" && allGroups!=null) {
                    setShowGroups(true)
                    localStorage.setItem("Groups", JSON.stringify(allGroups))
                }}, [allGroups])
    useEffect(()=>{
        if(changeViewNotes!="" && changeViewNotes!=null)
        setMountViewHolder(false)
        else
        setMountViewHolder(true)
        console.log(mountViewHolder)
    }, [changeViewNotes])
  return (
    <>{
    mountViewHolder &&
    <div className='ViewHolder'>
        <h1>Pocket Notes</h1>
        <button onClick={()=>{
            setIsCreateGroupSelected(true)
        }}><span style={{fontWeight: 'bold', fontSize: '1.5rem'}}>+</span>&nbsp;&nbsp;Create Notes App</button>
        {isCreateGroupSelected && <PopUpMobile show={isCreateGroupSelected} setShow={setIsCreateGroupSelected}/>}
        <div className="collectionContainer">
            {showGroups && Object.values(allGroups).map((item, key)=>(<Collection name={`${item.name}`} 
            color={`${item.color}`} key={key}/>))}
        </div>
    </div>}
    </>
  )
}
