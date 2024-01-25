import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Email from "./Components/Email/Email"
import Footer from "./Components/Footer/Footer"
import HorizontalLine from './Components/HorizontalLine/HorizontalLine';
import Contact from './Pages/Contact/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Contact />} />
        </Routes>
        <Email />
        <HorizontalLine/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
