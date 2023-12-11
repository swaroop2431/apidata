import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Details from './Details'
import './App.css'


function App(){
  console.log("hello")
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<Details/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


