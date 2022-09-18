import React from 'react'
import "./ItemHotels.css"

const ItemHotels = ({item}) => {
  return (
    <div className='itemHotels'>
       <div className='itemHotelsCol'>
          <img src={item.image} alt={item.name}></img>
       </div>
       <div className='itemHotelsCol'>
               <div className='itemHotelsDivs'>
                  <h2>{item.name}</h2>
              </div>
          <div className='itemHotelsDivs'>
              <div className='itemHotelsDiv'>
                  <span className='rating'>9.6</span>
              </div>
              <div className='itemHotelsDiv'>
                <span>Wonderfull</span>
                <span>321 Reviews</span>
              </div>
          </div>
       </div>
       <div className='itemHotelsCol'>
              <div className='itemHotelsColDiv'>
                  <h2>₹6000</h2>
              </div>
          
              <div className='itemHotelsColDiv'>
                   <span>Free Wi-Fi</span>
                    <span>Free Parking</span>
                    <span>Free Breakfast</span>
              </div>

              <div className='itemHotelsColDiv'>
                   <button>View Deal</button>
              </div>
      </div>
    </div>
  )
}

export default ItemHotels