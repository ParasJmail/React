import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RedDots from './components/RedDots'
import Hotel from './components/Hotel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RedDots />
      <Hotel />
    </>
  )
}

export default App
