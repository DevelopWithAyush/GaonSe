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
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import About from './Pages/About/About';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions';
import ReturnPolicy from './Pages/ReturnPolicy/ReturnPolicy';
import ReviewState from './Context/ReviewContext/ReviewState';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ProfileState from './Context/ProfileContext/ProfileContext';
import CheakOut from './Pages/CheakOut/CheakOut';
import CartState from './Context/CartContext/CartContext';
import CheckoutState from './Context/CheckoutContext/CheackoutContext';
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <AlertState>
          <ProductState>
            <CartState>
              <ReviewState>
                <ProfileState>
                  <CheckoutState>
                    <Navbar />
                    <Alert />
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/product' element={<Product />} />
                      <Route path='/singleproduct/:productId' element={<SIngleProduct />} />
                      <Route path='/contact' element={<Contact />} />
                      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                      <Route path='/about' element={<About />} />
                      <Route path='/termsandcondition' element={<TermsAndConditions />} />
                      <Route path='/returnpolicy' element={<ReturnPolicy />} />
                      <Route path='/returnpolicy' element={<ReturnPolicy />} />
                      <Route path='/profile' element={<ProfilePage />} />
                      <Route path='/cheakout' element={<CheakOut />} />
                      <Route path='*' element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                  </CheckoutState>
                </ProfileState>
              </ReviewState>
            </CartState>
          </ProductState>
        </AlertState>
      </BrowserRouter>
    </div>
  );
}

export default App;
