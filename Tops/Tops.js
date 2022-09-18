import React from 'react'
import "./Tops.css";
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Link} from "react-router-dom"

const Tops = () => {

  // const {data, loading,error} = useFetch("api/hotels/bycity?cities=Varanasi,Agra,Amritsar,kashmir,Kerla");

  return (
    <>
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} transitionTime={1000} showIndicators={false} showArrows={false}>
            <div className='cImage'>
             <Link to="/">
                <img src='./pics/varanasi.jpg' alt='Varanasi'></img>
                <div className='cImgDesc'>
                    <h2 className='cImgTitle'>Varanasi</h2>
                    <span className='cImgP'> 15 Properties</span>
                 </div>
             </Link>
          </div>

          <div className='cImage'>
          <Link to="/">
              <img src='./pics/agra.jpg' alt='agra'></img>
              <div className='cImgDesc'>
                    <h2 className='cImgTitle'>Agra</h2>
                    <span className='cImgP'> 10 Properties</span>
              </div>
           </Link>
          </div>

          <div className='cImage'>
          <Link to="/">
              <img src='./pics/amritsar.jpg' alt='Amritsar'></img>
              <div className='cImgDesc'>
                    <h2 className='cImgTitle'>Amritser</h2>
                    <span className='cImgP'>20 Properties</span>
              </div>
           </Link>
          </div>

          <div className='cImage'>
          <Link to="/">
              <img src='./pics/kerla.jpg' alt='Kerla'></img>
              <div className='cImgDesc'>
                    <h2 className='cImgTitle'>Kerla</h2>
                    <span className='cImgP'>25 Properties</span>
              </div>
           </Link>
          </div>

          <div className='cImage'>
          <Link to="/">
              <img src='./pics/kashmir.jpg' alt='Kashmir'></img>
              <div className='cImgDesc'>
                    <h2 className='cImgTitle'>Kashmir</h2>
                    <span className='cImgP'>30 Properties</span>
              </div>
         </Link>
          </div>
        </Carousel>
    </>
  )
}

export default Tops