import React, { useContext, useEffect } from 'react'
import"./Home.css";
import HeroSection from '../../Components/HeroSection/HeroSection';
import Category from '../../Components/Category/Category';
import Middlebanner from '../../Components/Middlebanner/Middlebanner';
import Newarrival from '../../Components/Newarrival/Newarrival';
import { ProductContext } from '../../Context/ProductContext/ProductState';
import BannerTop from '../../Components/BannerTop/BannerTop';
const Home = () => {
  
  const context = useContext(ProductContext)
  const {getProducts} = context;
  useEffect(()=>{
getProducts()


// eslint-disable-next-line
  },[])
  return (
  <>
  <HeroSection></HeroSection>
  <Category/>
  <BannerTop/>
  <Newarrival/>
  <Middlebanner/>
 
  </>
  )
}

export default Home
