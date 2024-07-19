import React from 'react'
import { myImg } from '../Assests/images'
import { MdHeight } from 'react-icons/md'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>
            Projects
        </h2>
        <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <img src={myImg} width={150} height={150} alt="projet image" className='mb-6 rounded'/>
                </div>
                <div className='w-full max-w-xl lg:-3/4h'>
                    <h6 className='mb-2 font-semibold'>project title</h6>
                    <p className='mb-4 text-neutral-400'>description</p>
                    <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>tech stach</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
