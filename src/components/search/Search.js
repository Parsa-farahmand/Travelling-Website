import React from 'react'
import './Search.css'
import Gold from '../../assets/gold.png'
function Search() {
  return (
    <div className='search'>
      <div className='container'>
        <div className='left'>
            <h2 className='p'>LUXURY INCLUDED VACATIONS FOR TOWO PEOPLE</h2>
            <p className='p'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className='search-col-1'>
                <div className='box'>
                    <div>
                        <img src={Gold} alt="/"/>
                    </div>
                    <div>
                        <h3 className='p' id='p'>WORLD'S LEADING</h3>
                        <p className='p'id='p' >ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div> 
                <div className='box'>  
                <div>
                        <h3 className='p' id="d">NO ONE INCLUDES MORE</h3>
                        <p className='p' id="d">aLL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        <button type="button">View Packages</button>
             </div>
            </div>
            </div>
        </div>
        </div>
      <div className='right'>
        <div className='promo'>
            <h4 className='save'>GET AN ADDITIONAL 7% OFF</h4>
            <p className='timer'>12 HOURS LEFT</p>
            <p className='offers'>VIEW ALL CURRENT OFFERS</p>
        </div>
        <form>
            <div className='input-wrap'>
                <label htmlFor="">Destination</label>
                <select>
                      <option value="1">Grande Antigua</option>
                      <option value="1">Grenda</option>
                      <option value="1">Emerald Bay</option>
                      <option value="1">Bora Bora</option>
                      <option value="1">Key West</option>
                      <option value="1">Maldives</option>
                      <option value="1">Barbados</option>
                </select>
            </div>
            <div className='date'>
                <div className='input-wrap'>
                    <label htmlFor=""> Check-In</label>
                    <input type="date"/>
                </div>
            </div>
            <button type="button">Rates & Availabilities</button>
        </form>
      </div>
         </div>
        </div>
  )
}

export default Search;
