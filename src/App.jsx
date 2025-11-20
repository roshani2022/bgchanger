import { useState } from 'react'




function App() {
  
  return (
    <div className='w-full h-screen duration-200'>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='bg-green-900'>Green</button>
           <button className='bg-pink-950'>Pink</button>
            <button className='bg-purple-800'>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
