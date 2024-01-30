import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Footer from "./Components/Footer/Footer"
import Contact from './Pages/Contact/Contact';
import ProductState from './Context/ProductContext/ProductState';
import SIngleProduct from './Pages/SingleProduct/SIngleProduct';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Alert from './Components/Alert/Alert';
import AlertState from "./Context/AlertContext/AlertState";
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <AlertState>
      <ProductState>
        <Navbar />
        <Alert/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/singleproduct/:productId' element={<SIngleProduct />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
        </ProductState>
        </AlertState>
      </BrowserRouter>
    </div>
  );
}

export default App;
