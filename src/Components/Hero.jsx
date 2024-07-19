import React from 'react'
import { myImg } from '../Assests/images'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 lg:mb-36'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        hackflix 10x
                    </h1>
                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                        a conprehensive cyber security course
                    </span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        
                    </p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={myImg} alt="video or another image" />
                </div>
            </div>        
        </div>      
    </div>
  )
}

export default Hero
