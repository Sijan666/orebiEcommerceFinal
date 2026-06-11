import './App.css'
import { ReactLenis } from '@studio-freight/react-lenis'
import { Routes, Route } from 'react-router-dom'

// Components
import Home from './components/pages/Home'
import RootLayouts from './components/layouts/RootLayouts'
import About from './components/pages/About'
import Error from './components/pages/Error'
import Shop from './components/pages/Shop'
import ContactUs from './components/pages/ContactUs'
import Journal from './components/pages/Journal'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import ProductInside from './components/pages/ProductInside'

function App() {
  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.05,
        wheelMultiplier: 0.8,
        smoothWheel: true,
        syncTouch: true,
      }}
    >
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinside" element={<ProductInside />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </ReactLenis>
  )
}

export default App