import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ThemeProvider } from './Context/ThemeContext'

function App() {
 

  return (
     <ThemeProvider>
     <Navbar/>
      <main className='min-h-screen'>
        <Outlet/>
      </main>
      <Footer/>
     </ThemeProvider>
  )
}

export default App
