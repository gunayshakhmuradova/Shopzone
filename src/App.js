import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/Detail';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import PageContainer from './containers/PageContainer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cart from './pages/Cart';
import Search from './pages/Search';

function App() {
  return (
    <div>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:search" element= {<Search />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
