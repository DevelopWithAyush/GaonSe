import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Navbar from './Components/Navbar/Navbar';
import ProductPage from './Pages/ProductPage/ProductPage';
import ProductState from './Context/ProductContext/ProductState';
import Wapper from './Components/Wapper/Wapper';
function App() {
  return (

    <>
      <Router>
        <ProductState>
        <Navbar />
        <Wapper/>
        <Routes>
          <Route path='/' element={<ProductPage />} />
        </Routes>
        </ProductState>
      </Router>
    </>
  );
}

export default App;
