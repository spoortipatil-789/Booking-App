import React from 'react'
import "./PropertyType.css";
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const PropertyType = () => {
  const {data, loading,error} = useFetch("api/hotels/bytype");
  //console.log(data);

   const images =[
    './pics/hotels.jpg',
    './pics/apartment.jpg',
    './pics/resort.jpg',
    './pics/villas.jpg',
    './pics/cabin.jpg'
   ]

  return (
    <div className='propTypeContainer'>
        <h2 className='propTypeTitle'>Browse by Property Type</h2>
        <div className='cityImages'>


          { loading ? (<h2>Loading.....</h2>) :(
            <>
           
           {
            data && images(map((img, i) => (
              <div className='cityImage' key={i}> 
             <Link to="/">
                 <div className='cityImg'>
                     <img src={img} alt='Hotel'></img>
                  </div>
                  <h4 className='cityImgTitle'>{data[i]?.type}</h4>
                  <span className='cityImgProperties'> {data[i]?.count} Properties</span>
             </Link>
          </div>
            )))
           }
        
       
            </>
          )}


     </div>
    </div>
  )
}

export default PropertyType