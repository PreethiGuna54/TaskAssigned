import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PriceCard from './components/PriceCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PriceCard />
    </>
  )
}

export default App
