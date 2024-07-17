import React from 'react'

const Content4: React.FC = () => {
  return (
    <>
      <div className='wrapper px-4 md:px-8 lg:px-16'>
        <div className='contact mt-7'>
          <div className='contact1'>
            <h3 className='font-semibold text-xl md:text-2xl lg:text-3xl'>Contact</h3>
          </div>
          <div className='mt-5'>
            <p className='text-base md:text-lg lg:text-xl'>Lets get in touch and talk about your next project.</p>
          </div>
          <div className='input mt-5 flex flex-col space-y-3'>
            <input className='border border-black p-2' type='text' placeholder='Name' />
            <input className='border border-black p-2' type='text' placeholder='Email' />
            <input className='border border-black p-2' type='text' placeholder='Subject' />
            <input className='border border-black p-2' type='text' placeholder='Comment' />
          </div>
          <div>
            <button className='text-white bg-black mt-4 p-2'>Send Message</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content4
