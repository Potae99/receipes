import React from 'react'
import TopHeader from './component/TopHeader'
import Card from './component/Card'
import Foot from './component/Foot'

function App() {
  return (
    <div className=' bg-orange-200 min-h-screen w-full '>
      <TopHeader/>
      <Card/>
      <Foot/>
    </div>
  )
}

export default App