import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import "./App.css"
import ProductDetails from './pages/ProductDetails'
import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Checkout from './pages/Checkout'
import OrderHistory from './pages/OrderHistory'
import Wishlist from './pages/Wishlist'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function App() {
    const [globalDiscount, setGlobalDiscount] = useState(0);

  
    useEffect(()=>{
      setGlobalDiscount(25)
    }, [])

    useEffect(() => {
      const nav = performance.getEntriesByType('navigation')[0]
      if (nav && nav.type === 'reload') {
        localStorage.removeItem('orders')
        window.dispatchEvent(new Event('orders-changed'))
      }
    }, [])
  return (
      <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <ScrollToTop />
        <Navbar/>
        <div className="flex-1">
          <Routes>
              <Route path="/" element={<Home globalDiscount={globalDiscount}/>}/>
              <Route path="/product/:id" element={<ProductDetails globalDiscount={globalDiscount}/>}/>
              <Route path="/shop" element={<Navigate to="/" replace />}/>
              <Route path="/cart" element={<Cart globalDiscount={globalDiscount}/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/order-history" element={<OrderHistory/>}/>
              <Route path="/wishlist" element={<Wishlist/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
  )
}

export default App
