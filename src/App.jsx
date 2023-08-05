import { useState } from 'react'
import LandingPage from './Screens/LandingPage/LandingPage'
import './App.css'
import Cart from './Screens/Cart/Cart'
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import ProductScreen from './Screens/IndividualProduct/Product'

function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="product/:id" element={<ProductScreen/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  )
}

export default App
