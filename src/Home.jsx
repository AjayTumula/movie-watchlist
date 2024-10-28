import React from 'react'
import Sidebar from './components/Sidebar'
import HeroContent from './components/HeroContent'

function Home() {
  return (
    <div className='flex justify-center'>
        <div className='d-flex justify-between'>
            <Sidebar />
            <HeroContent />
        </div>
    </div>
  )
}

export default Home