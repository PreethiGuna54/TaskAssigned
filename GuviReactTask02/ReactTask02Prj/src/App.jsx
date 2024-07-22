import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import ItemDisplay from './components/ItemDisplay'
import { allItems } from './utils/ItemDetails'
import ItemMap from './components/ItemMap'
import Navbar from './components/Navbar'
import CartContext from './utils/CartContext'

function App() {
  const [cartUseCxt,setCartUseCxt]=useState(0)
  //const cartContext=createContext()

  return (
    
    <CartContext.Provider value={[cartUseCxt,setCartUseCxt]}>
    <Navbar />
    <ItemMap  allItems={allItems}/>
     
    </CartContext.Provider>
  )
}

export default App
