import { useState } from 'react'
import Card from './Card.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card/>
    </>
  )
}

export default App
