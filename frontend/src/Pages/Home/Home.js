import React from 'react'
import"./Home.css";
import HeroSection from '../../Components/HeroSection/HeroSection';
import Category from '../../Components/Category/Category';
import Middlebanner from '../../Components/Middlebanner/Middlebanner';
import Newarrival from '../../Components/Newarrival/Newarrival';
import HorizontalLine from '../../Components/HorizontalLine/HorizontalLine';

const Home = () => {
  return (
  <>
  <HeroSection></HeroSection>
  <Category/>
 <HorizontalLine/>
  <Middlebanner/>
 <HorizontalLine/>
  <Newarrival/>
 
  </>
  )
}

export default Home
