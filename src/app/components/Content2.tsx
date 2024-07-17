"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Content2: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const LoadingComponent = () => (
    <div className="animate-pulse bg-gray-200 w-full h-64"></div>
  );

  return (
    <>
      <div className='wrapper px-4 md:px-8 lg:px-16'>
        <div className='mt-6'>
          <div className='mb-6'>
            <h3 className='font-semibold text-xl md:text-2xl lg:text-3xl'>Projects</h3>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
            <div className='relative'>
              <div className='imgtext'>
                {loading ? (
                  <LoadingComponent />
                ) : (
                  <Image
                    src="/img11.jpg"
                    width={300}
                    height={200}
                    alt="img11"
                    className='w-full h-auto'
                  />
                )}
                <h3 className='bg-black text-center absolute text-white top-0'>Summer House</h3>
              </div>
            </div>
            <div className='relative'>
              <div className='imgtext'>
                {loading ? (
                  <LoadingComponent />
                ) : (
                  <Image
                    src="/img12.jpg"
                    width={300}
                    height={200}
                    alt="img12"
                    className='w-full h-auto'
                  />
                )}
                <h3 className='bg-black text-center absolute text-white top-0'>Brick House</h3>
              </div>
            </div>
            <div className='relative'>
              <div className='imgtext'>
                {loading ? (
                  <LoadingComponent />
                ) : (
                  <Image
                    src="/img13.jpg"
                    width={300}
                    height={200}
                    alt="img13"
                    className='w-full h-auto'
                  />
                )}
                <h3 className='bg-black text-center absolute text-white top-0'>Renovated</h3>
              </div>
            </div>
            <div className='relative'>
              <div className='imgtext'>
                {loading ? (
                  <LoadingComponent />
                ) : (
                  <Image
                    src="/img14.jpg"
                    width={300}
                    height={200}
                    alt="img14"
                    className='w-full h-auto'
                  />
                )}
                <h3 className='bg-black text-center absolute text-white top-0'>Barn House</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content2;
