import { useState } from 'react'
import { GlobalStyles } from './GlobalStyles'

import MainCard from './components/MainCard'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles/>
      <MainCard></MainCard>
    </>
  )
}

export default App
