import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReactLenis from 'lenis/react';
import Loader from './components/Loader';
import CartPage from './components/pages/Cart';
import Success from './components/pages/Success';
import Checkout from './components/pages/Checkout';
import TrackOrder from './components/pages/TrackOrder';

const RootLayouts = lazy(() => import('./components/layouts/RootLayouts'));
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Shop = lazy(() => import('./components/pages/Shop'));
const ContactUs = lazy(() => import('./components/pages/ContactUs'));
const Login = lazy(() => import('./components/pages/Login'));
const Signup = lazy(() => import('./components/pages/Signup'));
const ProductInside = lazy(() => import('./components/pages/ProductInside'));
const IndividualProduct = lazy(() => import('./components/pages/IndividualProduct'));
const Error = lazy(() => import('./components/pages/Error'));
const CategoryPage = lazy(() => import('./components/pages/CategoryPage'));
const Receipt = lazy(() => import('./components/pages/Receipt'));

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 0.8, smoothWheel: true, syncTouch: false, smoothTouch: false }}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<RootLayouts />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinside" element={<ProductInside />} />
            <Route path="/product/:slug" element={<IndividualProduct />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/track" element={<TrackOrder />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/receipt" element={<Receipt />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </ReactLenis>
  );
}

export default App;