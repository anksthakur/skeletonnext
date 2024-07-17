"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Content1: React.FC = () => {
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
      {loading ? (
        <LoadingComponent />
      ) : (
        <div>
          <Image
            src="/img2.png"
            width={1500}
            height={500}
            alt="1st img"
          />
        </div>
      )}
    </>
  );
}

export default Content1;
