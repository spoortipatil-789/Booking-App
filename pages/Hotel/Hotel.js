import React from 'react';
import "./Hotel.css"
import Header from '../../Compnents/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import {PhotoAlbum} from "react-photo-album";
import Footer from '../../Compnents/Footer/Footer';
import SubScribe from '../../Compnents/Subscribe/SubScribe';

const Hotel = () => {


  const photos = [
    {
        src: "/pics/hotel1.jpg",
        width: 800,
        height: 600
    },
    {
        src: "/pics/hotel2.jpg",
        width: 800,
        height: 600
    },
    {
      src: "/pics/hotel3.jpg",
      width: 800,
        height: 600
  },
  {
    src: "/pics/hotel4.jpg",
    width: 800,
        height: 600
},
{
  src: "/pics/hotel5.jpg",
  width: 800,
        height: 600
},
{
  src: "/pics/hotel6.jpg",
  width: 800,
        height: 600
},
{
  src: "/pics/hotel7.jpg",
  width: 1600,
  height: 900
},
];
  return (
    <div>
      <Header type="smallHeader" />
      <div className='hotelContainer'>
         <div className='hotelRow'>
             <div className='hotelCol'>
                <h2 className='hotelTitle'>Industrial </h2>
                 <span><FontAwesomeIcon icon={faMapLocation}/></span> 
             </div>
              <div className='hotelCol'>
                     <button className='hotelBtn'> Booking Now</button>
              </div>
         </div>
         <div className='hotelRow'>
              <PhotoAlbum layout='rows' photos={photos}/>
         </div>

         <div className='hotelRow'>
         <h3 className='hotelSubTitle'>Description</h3>
           <p className='hotelDesc'>With a stay at Industrial in ---------. you'll be within a 5-minutes walk of star livnica museum
            </p>
         </div>
      
      </div>
      <SubScribe/>
        <Footer/>
    </div>
  )
}

export default Hotel