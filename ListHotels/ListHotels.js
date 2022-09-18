import React from 'react'
import ItemHotels from '../itemHotels/ItemHotels'
import "./ListHotels.css"

const ListHotels = ({data , loading}) => {
  return (
    <div className='listHotels'>
           {
            loading ? (<h2>Loading...</h2>) : (
              <>
                   {
                    data.map((item) => {
                      <ItemHotels item = {item} key = {item._id}/>
                    })
                   }
              </>
            )
           }
           
    </div>
  )
}

export default ListHotels