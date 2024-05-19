import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import GamePlay from './Components/GamePlay'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toogle = ()=>{
    setIsGameStarted((prev) => !prev);
  }

  return (
    <div className='bg-soft-radial'>
    {isGameStarted ? <GamePlay/> : <Home toggle = {toogle}/>}
      
    </div>
  )
}

export default App
