import React, { MouseEvent, useState} from 'react'
import { useRef } from 'react';
// import Modal from './modals';

type AddEventProps = {
    title : string,
    children : React.ReactNode,
    type : "Economic" | "Valuation"
}

function AddEvent({title, children}:AddEventProps) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const child = useRef<HTMLDivElement>(null);
    
    function openModal() { 
      setModalIsOpen(true);
     }
     const closeModal = (event : MouseEvent) => { 
      const target = event.target as HTMLElement
      if(!child.current?.contains(target)){
        setModalIsOpen(false)
      }
    }
  return (
    <>
    <div className='bg-gray-500 w-fit h-fit flex flex-row gap-5 p-5 rounded-xl cursor-pointer' onClick={openModal}>
      <div className='size-16 rounded-full bg-green-500 flex justify-center'>
        {children}
      </div>
      <div className='m-auto font-semibold text-3xl text-white'>
        {`+ Add ${title}`}
      </div>
    </div>
    <div className={`absolute left-0 top-0 m-auto w-screen flex justify-around  h-screen bg-black/20 rounded-xl z-40 ${modalIsOpen?'block`':'hidden'}`} onClick={closeModal} >
      <div className="absolute bg-white w-fit top-[50%] translate-y-[-50%]" ref={child}>
        <h2>Modal Title</h2>
        {/* <button onClick={closeModal} >Close</button> */}
        <div>Modal Content</div>
      </div>
    </div> 
    </>
  )
}

export default AddEvent