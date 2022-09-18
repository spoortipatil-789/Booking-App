import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch.js'
import "./City.css"

const City = () => {

  const {data, loading,error} = useFetch("api/hotels/bycity?cities=Udaipur,Shimla,Manali,Lah Ladakh,Lakshadweep");
  //console.log(data);
  return (
    <div className='cities'>
     <h2 className='cityTitle'>Explore Serbia</h2>
     <p className='cityDesc'>These popular destinations have a lot to offer</p>
     <div className='cityImages'>

   {loading ? (<h2>Loading...</h2>) : (
     <>
     <div className='cityImage'> 
     <Link to="/"> 
          <div className='cityImg'>
               <img src='./pics/udaipur.jpg' alt='Udaipur'></img>
           </div>
             <h4 className='cityImgTitle'>Udaipur</h4>
           <span className='cityImgProperties'> {data[0]} Properties</span>

     </Link>
     </div>

        
        <div className='cityImage'> 
        <Link to="/"> 
           <div className='cityImg'>
               <img src='./pics/lakshadweep.jpg' alt='Lakshadweep'></img>
           </div>
             <h4 className='cityImgTitle'>Lakshadweep</h4>
           <span className='cityImgProperties'>{data[4]} Properties</span>
           </Link>
        </div>

        <div className='cityImage'> 
        <Link to="/"> 
           <div className='cityImg'>
               <img src='./pics/ladhak.jpg' alt='Lah Ladakh'></img>
           </div>
             <h4 className='cityImgTitle'>Lah Ladakh</h4>
           <span className='cityImgProperties'>{data[3]} Properties</span>
        </Link>
        </div>

        

        <div className='cityImage'> 
        <Link to="/"> 
           <div className='cityImg'>
               <img src='./pics/manali.jpg' alt='Manali'></img>
           </div>
             <h4 className='cityImgTitle'> Manali</h4>
           <span className='cityImgProperties'>{data[2]} Properties</span>
        </Link>
        </div>

        <div className='cityImage'> 
        <Link to="/"> 
           <div className='cityImg'>
               <img src='./pics/shimla.jpg' alt='Shimla'></img>
           </div>
             <h4 className='cityImgTitle'>Shimla </h4>
           <span className='cityImgProperties'> {data[1]} Properties</span>
        </Link>
        </div>
        </>
  
   )}
     </div>
    </div>
  )
}

export default City