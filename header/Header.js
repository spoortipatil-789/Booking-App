import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCalendar, faCamera, faCar, faPerson, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons";
import {DateRange} from "react-date-range";
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 



const Header = ({type}) => {
  const [destination , setDestination] = useState("")
  const [openDate , setOpenDate] = useState(false);
  const [date , setDate]= useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
]);

const [openOptions , setOpenOptions] = useState(false);
const [options , setOptions] = useState({
  adult:1,
  children :0,
  room:1
});

const navigate = useNavigate();

const handleOption = (name, operation)=>{
  setOptions((prev) =>{
    return{
      ...prev,
      [name] : operation === "increment" ? options[name] +1 : options[name] - 1,
    }
  })
}

const handleSearch = ()=>{
  navigate("/hotels", {state: {destination , date, options}})
}

  return (
    <div className='h-container'>
        <div className='h-row'>
            <div className='h-col'>
                <Link to="/">Miljan Peric</Link>
            </div>
            <div className='h-col'>
                <button>Register</button>
                <button>Sign In</button>
            </div>
        </div>
        <div className='h-row'>
            <div className={type === "smallHeader" ? "h-col smallHeader" : "h-col"}>
              <div className='icons'>
                <div className='icon active'>
                <FontAwesomeIcon icon={faBed} />
                    <Link to="/">Stays</Link>
                </div>
                <div className='icon'>  
                <FontAwesomeIcon icon={faPlane} />
                   <Link  to="/">Flights</Link>
                </div>
                <div className='icon'> 
                <FontAwesomeIcon icon={faCar} />
                  <Link  to="/">Car Rentals</Link>
                </div>
                <div className='icon'>  
                <FontAwesomeIcon icon={faCamera} />
                  <Link to="/">Attraction</Link>
                </div>
                <div className='icon'> 
                <FontAwesomeIcon icon={faTaxi} />
                 <Link to="/">Airport Taxi</Link>
                </div>
              </div>
            </div>
            {  type !== "smallHeader" &&
              <>
              <div className='h-col'>
               <h2>Make your Reservation</h2>
            </div>
            <div className='h-col'>
               <div className='search'>
                <div className='search-item'>
                  <FontAwesomeIcon icon={faBed} />
                   <input type="text" onChange={(e)=> setDestination(e.target.value)} placeholder='Where your going?'></input>
                </div>
                <div className='search-item'>
                   <FontAwesomeIcon icon={faCalendar}/>
                   <span onClick={()=>setOpenDate(!openDate)}> {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`} </span>
                   { openDate && (<DateRange 
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date} className="date"
                    minDate={new Date()}
                   />)}
                  </div>
                  <div className='search-item'>
                    <FontAwesomeIcon icon={faPerson}/>
                    <span onClick={()=> setOpenOptions(!openOptions)}> {`${options.adult} adult - ${options.children} children - ${options.room} room`} </span>

                    {
                      openOptions && (
                        <div className='options'>
                          <div className='optionsItem'>
                            <span>Adult </span>
                            <div className='optionbutton'>
                              <button onClick={() => handleOption("adult", "decrement")} className='optionbtn' disabled={options.adult <=1}>-</button>
                              <span>{options.adult}</span>
                              <button onClick={() => handleOption("adult", "increment")} className='optionbtn'>+</button>
                            </div>
                          </div>
                          <div className='optionsItem'>
                            <span>Children</span>
                            <div className='optionbutton'>
                              <button onClick={() => handleOption("children", "decrement")} className='optionbtn' disabled={options.children <=0}>-</button>
                              <span>{options.children}</span>
                              <button onClick={() => handleOption("children", "increment")} className='optionbtn'>+</button>
                            </div>
                          </div>
                          <div className='optionsItem'>
                            <span>Room</span>
                            <div className='optionbutton'>
                              <button onClick={() => handleOption("room", "decrement")} className='optionbtn' disabled={options.room <=1}>-</button>
                              <span>{options.room}</span>
                              <button onClick={() => handleOption("room", "increment")} className='optionbtn'>+</button>
                            </div>
                          </div>
                        </div>
                      ) 
                    }
                  </div>
                  <div className='search-item'>
                   <button className='buttonsearch' onClick={handleSearch}>Search</button>
                   </div>
               </div>
            </div>
              </>
            }
        </div>
    </div>
  )
}

export default Header