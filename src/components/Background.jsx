import React from 'react'

function Background() {
  return (
    <div className="fixed z-[2] w-full h-screen">
     <div className="w-full py-7 absolute top-[5%] flex justify-center text-zinc-600 font-semibold text-xl">Documents.</div>
     <h1 className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold text-zinc-900 leading-none tracking-tighter'>DOCS.</h1>
    </div>
  )
}

export default Background;
