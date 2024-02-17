import { createContext, useContext, useState } from "react";
import { ModalContext } from "../ModalContext/ModalContext";
import { AlertContext } from "../AlertContext/AlertState";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext()


const ProductState = (props) => {
    const navigate= useNavigate()

    const modalcontext = useContext(ModalContext);
    const { closeWapper, closedeleteModal } = modalcontext;
    const alertcontext = useContext(AlertContext)
    const { showAlert } = alertcontext;

    const [deleteProductId,setDeleteProductId] = useState()
    const [product, setProduct] = useState([]);
    const [singleproduct, setSingleproduct] = useState([])
    const [productName, setProductName] = useState("");
    const [mrp, setMrp] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [stocks, setStocks] = useState("");
    const [category, setCategory] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [img4, setImg4] = useState("");


    const url = "http://localhost:5000/"

    // some css for wapper 



    const getProducts = async () => {
        try {
            const response = await fetch(`${url}api/product/products/`, {
                method: 'GET',
                headers: {
                    'Content_Type': 'application/json',
                },
            })
            const json = await response.json()
            setProduct(json.products.reverse())

        } catch (error) {
            console.log("error ")
        }
    }
    const deleteProduct = async () => {
        showAlert("true", "aldfjl")
        try {
            const response = await fetch(`${url}api/product/products/${deleteProductId}`, {
                method: 'DELETE',
                headers: {
                    'Content_Type': 'application/json',
                },
            })
            const json = await response.json()
            showAlert("true", json.message)
            closeWapper();
            closedeleteModal();
            getProducts()



        } catch (error) {
            console.log("error ")
            showAlert("false", "product not delete")
        }
    }


    const getsingleproduct = async (productId) => {
        try {
            const response = await fetch(`${url}api/product/singleproduct/${productId}`, {
                method: 'GET',
                headers: {
                    'Content_Type': 'application/json',
                },
            })
            const json = await response.json()
            setSingleproduct(json)
            setProductName(json.productName);
            setMrp(json.mrp);
            setDiscountPrice(json.discountPrice);
            setStocks(json.stocks);
            setCategory(json.category);
            setProductDescription(json.productDescription);
            setImg1(json.imgUrls[0]);
            setImg2(json.imgUrls[1]);
            setImg3(json.imgUrls[2]);
            setImg4(json.imgUrls[3]);
            
        } catch (error) {
            showAlert("fail", "some issues")
        }
    }

    const updateProduct = async (productId) => {
        try {
          const updatedProductData = {
              productName: productName,
            mrp: mrp,
            discountPrice,
            productDescription: productDescription,
            stocks: stocks,
            category: category,
            imgUrls: [img1,img2,img3,img4],
        };
        
        const response = await fetch(`${url}api/product/products/${productId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProductData)
        });
        const json = await response.json();
        showAlert("true",json.message)
        navigate("/")
    } catch (error) {
        showAlert("false","product not update")
        navigate("/")
        }
      };
    const addProduct = async () => {
        try {
          const addProductData = {
              productName,
            mrp,
            discountPrice,
            productDescription,
            stocks,
            category,
            imgUrls: [img1,img2,img3,img4],
        };
        
        const response = await fetch(`${url}api/product/products`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProductData)
        });
        const json = await response.json();
        showAlert("true",json.message)
        navigate("/")
    } catch (error) {
        showAlert("false","product not update")
        navigate("/")
        }
      };
      
      
      return (

        <ProductContext.Provider value={{setDeleteProductId,addProduct,updateProduct, productName, setProductName, mrp, setMrp, discountPrice, setDiscountPrice, stocks, setStocks, category, setCategory, productDescription, setProductDescription, img1, setImg1, img2, setImg2, img3, setImg3, img4, setImg4, product, getProducts, deleteProduct, getsingleproduct, singleproduct }}>
            {props.children}
        </ProductContext.Provider>

    )
}

export default ProductState
