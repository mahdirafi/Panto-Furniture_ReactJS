import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
 

  return (
     <>
     <Navbar/>
      <main className='min-h-screen'>
        <Outlet/>
      </main>
      <Footer/>
     </>
  )
}

export default App
