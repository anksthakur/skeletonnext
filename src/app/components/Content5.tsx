"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Content5 = () => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1000)
  },[])
  const LoadingContent = () => (
    <div className="animate-pulse bg-gray-200 w-full h-64"></div>
  )
  return (
    <>
      <div className='wrapper px-4 md:px-8 lg:px-16'>
        {loading ? (<LoadingContent/>):(<div className='mt-6'>
        <Image
        src="/last.jpg"
        width={1500}
        height={500}
        alt="last"
        />
      </div>)}
      </div>
    </>
  )
}

export default Content5
