import React from 'react';
import "./Hotels.css"
import Header from "../../Compnents/header/Header"
import Search from '../../Compnents/Search/Search';
import ListHotels from '../../Compnents/ListHotels/ListHotels';
import Footer from '../../Compnents/Footer/Footer';
import SubScribe from '../../Compnents/Subscribe/SubScribe';

const Hotels = () => {
  return (
    <div>
      <Header type="smallHeader"/>
      <div className='hotelsContainer'>
        <div className='hotelsRow'>
          <div className='hotelsCol'>
            <Search/>
          </div>
          <div className='hotelsCol'>
            <ListHotels/>
          </div>
        </div>
      </div>
      <SubScribe/>
       <Footer/>
    </div>
  )
}

export default Hotels