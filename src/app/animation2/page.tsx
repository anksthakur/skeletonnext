"use client"
import React, { useState } from 'react'
import "../animation2/page.css"

const Page = () => {
  const [visible, setVisible] = useState(false);

  const clickDiv = () => {
    setVisible(true);  
  }

  return (
    <div className='animation flex justify-center items-center h-screen'>
      <div onClick={clickDiv} className='maindiv bg-black h-12 w-12 '>
        {visible && (
          <div className='topbottom flex'>
            <div className='top'>
              <div className='first bg-red-500 w-6 h-6'></div>
              <div className='second bg-green-500 w-6 h-6'></div>
            </div>
            <div className='bottom'>
              <div className='third bg-blue-500 w-6 h-6'></div>
              <div className='fourth bg-yellow-500 w-6 h-6'></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page