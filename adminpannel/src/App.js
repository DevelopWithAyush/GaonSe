import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Navbar from './Components/Navbar/Navbar';
import ProductPage from './Pages/ProductPage/ProductPage';
import ProductState from './Context/ProductContext/ProductState';
import Wapper from './Components/Wapper/Wapper';
import ModalState from './Context/ModalContext/ModalContext'
import AlertState from "./Context/AlertContext/AlertState"
import Alert from './Components/Alert/Alert';
import EditProduct from './Components/EditProduct/EditProduct';
import AddProduct from './Components/AddProduct/AddProduct';
import Review from './Pages/Review/Review';
import ReviewState from "./Context/ReviewContext/ReviewContext"
import UserState from './Context/UserContext/UserContext';
import Userpage from './Pages/UserPage/Userpage';
function App() {
  return (

    <>
      <Router>
        <AlertState>
          <ModalState>
            <ProductState>
              <ReviewState>
                <UserState>
                  <Navbar />
                  <Alert />
                  <Wapper />
                  <Routes>
                    <Route path='/' element={<ProductPage />} />
                    <Route path='/editproduct/:productId' element={<EditProduct />} />
                    <Route path='/addproduct' element={<AddProduct />} />
                    <Route path='/review' element={<Review />} />
                    <Route path='/user' element={<Userpage />} />
                  </Routes>
                </UserState>
              </ReviewState>
            </ProductState>
          </ModalState>
        </AlertState>
      </Router>
    </>
  );
}

export default App;
