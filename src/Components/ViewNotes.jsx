import React from 'react'
import './ViewNotes.css'
import DefaultImage from './assets/DefaultImage.png'

export default function ViewNotes() {
  return (
    <div className='DefaultView'>
        <img src={DefaultImage} alt="Pocket Notes"/>
        <p>Pocket Notes</p>
        <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p>
    </div>
  )
}
