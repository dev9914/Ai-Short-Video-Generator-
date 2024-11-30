import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='px-5 p-3'>
      <div className='flex gap-3 items-center'>
        <Image src={'/logo.png'} width={40} height={40}/>
        <h2>Ai Reels</h2>
      </div>
    </div>
  )
}

export default Header
