import { useState } from 'react'
import './App.css'
import Saudacao from './component/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello World</h1>
     <Saudacao />
    </>
  )
}

export default App
