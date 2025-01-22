import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavDrawer from './components/Scaffold/NaviDrawer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavDrawer/>
    </>
  )
}

export default App
