import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from './components/Footer/Footer'
import LoginPop from './components/LoginPopup/LoginPop'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState("")
  return (
    <>
      {showLogin ? <LoginPop setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} setSearchQuery={setSearchQuery}/>
        <Routes>
          <Route path='/' element={<Home searchQuery={searchQuery}/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
