import React, {useState, useEffect} from 'react'

export default function Group(props) {
    let [GroupName, setGroupName] = useState("")
    useEffect(()=>{
        if(props.children!='') 
            setGroupName(()=>(
                props.children.substring(0, 2).toUpperCase()
            ))
    }, [])
    let groupStyle = {
        display: 'flex',
        flexDirection: 'row',
        padding: '1rem',
        fontSize: "1rem",
        fontFamily: 'Roboto',
        alignItems: "center",
        fontWeight: 'bold',
        position: 'relative',
        left: '5%',
        cursor: 'pointer'
    }
    let buttonStyle = {
        width: '3rem',
        height: '3rem',
        borderRadius: '100%',
        background: props.color,
        border: 'none',
        display: 'inline-block',
        fontSize: '1rem',
        color: '#fff',
        textAlign: 'center',
        cursor: 'pointer'
    }
  return (
    <div style={groupStyle}>
        <button style={buttonStyle}>{GroupName}</button>
        <span>&nbsp;&nbsp;&nbsp;</span>
        {props.children}
    </div>
  )
}
