"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Content3: React.FC = () => {
  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  const LoadingComponent = () => (
    <div className="animate-pulse bg-gray-200 w-full h-64"></div>
  );
  return (
    <>
      <div className='wrapper px-4 md:px-8 lg:px-16'>
        <div className='about'>
          <div className='abouttext mt-5'>
            <div>
              <h3 className='font-semibold text-xl md:text-2xl lg:text-3xl'>About</h3>
            </div>
            <div className='mt-5'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis qui vitae sapiente sed et quae magni eos laborum illo delectus, rerum libero maxime commodi quasi consequatur, perferendis expedita exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis qui vitae sapiente sed et quae magni eos laborum illo delectus, rerum libero maxime commodi quasi consequatur, perferendis expedita exercitationem.
              </p>
            </div>
          </div>
          <div className='flex justify-between flex-wrap 
          '>
            <div className='aboutimg mt-5 w-full sm:w-full md:w-1/2 lg:w-1/4 px-2'>
              {loading ? (<LoadingComponent/>):(<div className='imgabout'>
                <Image
                  src="/john.jpg"
                  width={300}
                  height={200}
                  alt="john"
                  className='w-full h-auto'
                />
              </div>)}
              <div className='mt-4'>
                <h1 className='font-semibold'>John Doe</h1>
              </div>
              <div className='mt-4'>
                <h4 className='text-gray-400'>CEO & Founder</h4>
              </div>
              <div className='mt-4'>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              </div>
              <div className='mt-4 bg-gray-200 text-center'>
                <button>Contact</button>
              </div>
            </div>
            <div className='aboutimg mt-5 w-full sm:w-full md:w-1/2 lg:w-1/4 px-2'>
              {loading ? (<LoadingComponent/>):(<div className='imgabout'>
                <Image
                  src="/jane.jpg"
                  width={300}
                  height={200}
                  alt="jane"
                  className='w-full h-auto'
                />
              </div>)}
              <div className='mt-4'>
                <h1 className='font-semibold'>Jane Doe</h1>
              </div>
              <div className='mt-4'>
                <h4 className='text-gray-400'>Architect</h4>
              </div>
              <div className='mt-4'>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              </div>
              <div className='mt-4 bg-gray-200 text-center'>
                <button>Contact</button>
              </div>
            </div>
            <div className='aboutimg mt-5 w-full sm:w-full md:w-1/2 lg:w-1/4 px-2'>
             {loading ? (<LoadingComponent/>):( <div className='imgabout'>
                <Image
                  src="/mike.jpg"
                  width={300}
                  height={200}
                  alt="mike"
                  className='w-full h-auto'
                />
              </div>)}
              <div className='mt-4'>
                <h1 className='font-semibold'>Mike Ross</h1>
              </div>
              <div className='mt-4'>
                <h4 className='text-gray-400'>Architect</h4>
              </div>
              <div className='mt-4'>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              </div>
              <div className='mt-4 bg-gray-200 text-center'>
                <button>Contact</button>
              </div>
            </div>
            <div className='aboutimg mt-5 w-full sm:w-full md:w-1/2 lg:w-1/4 px-2'>
              {loading ? (<LoadingComponent/>):(<div className='imgabout'>
                <Image
                  src="/dan.jpg"
                  width={300}
                  height={200}
                  alt="dan"
                  className='w-full h-auto'
                />
              </div>)}
              <div className='mt-4'>
                <h1 className='font-semibold'>Dan Star</h1>
              </div>
              <div className='mt-4'>
                <h4 className='text-gray-400'>Architect</h4>
              </div>
              <div className='mt-4'>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              </div>
              <div className='mt-4 bg-gray-200 text-center'>
                <button>Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content3
