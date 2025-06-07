import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
      <div className='bg_container'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </div>
  )
}

export default App
