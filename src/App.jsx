import React, { Suspense, lazy } from 'react'
import './App.css'
import { ReactLenis } from 'lenis/react'
import { Routes, Route } from 'react-router-dom'

import RootLayouts from './components/layouts/RootLayouts'

const Home = lazy(() => import('./components/pages/Home'))
const About = lazy(() => import('./components/pages/About'))
const Shop = lazy(() => import('./components/pages/Shop'))
const ContactUs = lazy(() => import('./components/pages/ContactUs'))
const Journal = lazy(() => import('./components/pages/Journal'))
const Login = lazy(() => import('./components/pages/Login'))
const Signup = lazy(() => import('./components/pages/Signup'))
const ProductInside = lazy(() => import('./components/pages/ProductInside'))
const Error = lazy(() => import('./components/pages/Error'))

function App() {
  return (
    <ReactLenis root options={{lerp: 0.05, wheelMultiplier: 0.8, smoothWheel: true, syncTouch: true,}}>
      <Suspense fallback={<div className="loading-screen">Loading...</div>}>
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
      </Suspense>
    </ReactLenis>
  )
}

export default App