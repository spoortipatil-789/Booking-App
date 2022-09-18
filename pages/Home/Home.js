import React from 'react';
import City from '../../Compnents/City/City';
import Footer from '../../Compnents/Footer/Footer';
import Header from '../../Compnents/header/Header';
import PropertyType from '../../Compnents/PropertyType/PropertyType';
import SubScribe from '../../Compnents/Subscribe/SubScribe';
import Tops from '../../Compnents/Tops/Tops';
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='main-container'>
        <City/>
        <PropertyType/>
        <Tops/>
        <SubScribe/>
        <Footer/>
        
      </div>
    </div>
  )
}

export default Home