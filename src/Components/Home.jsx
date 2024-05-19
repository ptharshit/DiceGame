import React, { useState } from 'react'

const Home = ({toogle}) => {
  
  return (
    <div className='bg-soft-radial h-screen w-screen flex justify-center items-center'>
        <div className=' flex  h-[80%] w-[80%] border border-black text-black '>
            {/* left */}
            <div className=' w-[50%]'>
                <img className=' h-fit w-fit' src="./Dicess.png" alt="" />
            </div>
            {/* right */}
            <div className=' w-[50%] flex flex-col gap-9 justify-center items-center'>
                <h1 className=' text-8xl font-extrabold'>Dice Game</h1>
                <button onClick={toogle}  className=' border-2 border-black text-white bg-black p-3 rounded-md   hover:bg-white hover:text-black transition-colors duration-300'>Play Game</button>

            </div>
        </div>
    </div>
  )
}

export default Home