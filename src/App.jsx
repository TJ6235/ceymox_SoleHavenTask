import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './Pages/Landingpage'
import PagenotFound from './Pages/PagenotFound'



function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='*' element={<PagenotFound/>}/>
      </Routes>
    </>
  )
}

export default App  


