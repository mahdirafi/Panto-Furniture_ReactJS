import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ThemeProvider } from './Context/ThemeContext'
import { CartProvider } from './Context/CartContext'

function App() {
 

  return (
     <ThemeProvider>
      <CartProvider>
        <Navbar/>
      <main className='min-h-screen'>
        <Outlet/>
      </main>
      <Footer/>
      </CartProvider>
     
     </ThemeProvider>
  )
}

export default App
