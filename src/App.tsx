import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

const PageOne = React.lazy(() => import('./PageOne'))
const PageTwo = React.lazy(() => import('./PageTwo'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ 
          <React.Suspense fallback={<div>Loading...</div>}>
            <PageOne />
          </React.Suspense>
        } />
        <Route path="/page-2" element={ 
          <React.Suspense fallback={<div>Loading...</div>}>
            <PageTwo />
          </React.Suspense>
        } />
      </Routes>
    </div>
  )
}

export default App
