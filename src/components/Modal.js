import React, { useState } from 'react'
import Button from './Button'

const Modal = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () =>{
        setModal(!modal)
        console.log('btn clicked')
    }
  return (
    <div>
      


      <Button onToggle ={toggleModal} />
    </div>
  )
}

export default Modal
