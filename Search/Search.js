
import React, { useState } from 'react'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range'
import "./Search.css"
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Search = () => {

  const {data, loading,error} = useFetch("/hotel?city=${destination}");

  const location = useLocation();
  const [destination , setDestination] = useState(location.state.destination)
  const [openDate , setOpenDate] = useState(false);
  const [date , setDate]= useState(location.state.date);
  const [options , setOptions] = useState(location.state.options);
  return (
    <div className='searchHotels'>
         <div className='search'>
                <div className='searchItem'>
                    <label>Destination</label>
                    <input placeholder={destination} type="text"></input>
                </div>

                <div className='searchItem'>
                   <label>Check-in Date</label>
                   <label onClick={()=>setOpenDate(!openDate)}> {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`} </label>
                   { openDate && (<DateRange
                    onChange={item => setDate([item.selection])} minDate={new Date()}
                    ranges={date} className="searchDate"
                   />)}
                  </div>


                  <div className='searchItem'>
                     <div className='searchOptions'>
                        <div className='searchOptionsItem'>
                           <label className='searchOptionsText'>Min Price <sup>per night</sup></label>
                            <input type="number" className='searchOptionsInput' ></input>
                        </div> 

                        <div className='searchOptionsItem'>
                           <lable className='searchOptionsText'>Max Price <sup>per night</sup></lable>
                            <input type="number" className='searchOptionsInput' ></input>
                        </div> 

                        <div className='searchOptionsItem'>
                           <label className='searchOptionsText'>Adult</label>
                            <input type="number" min={1} className='searchOptionsInput' placeholder={options.adult} ></input>
                        </div> 

                        <div className='searchOptionsItem'>
                           <lable className='searchOptionsText'>Children</lable>
                            <input type="number" min={0} className='searchOptionsInput' placeholder={options.children} ></input>
                        </div> 

                        <div className='searchOptionsItem'>
                           <label className='searchOptionsText'>Room</label>
                            <input type="number" min={1} className='searchOptionsInput' placeholder={options.room} ></input>
                        </div> 
                      </div>
                     
                  </div>
                  <div className='searchItem'>
                   <button className='buttonsearch' loading={loading} data={data}>Search</button>
                   </div>
               </div>
    </div>
  )
}

export default Search