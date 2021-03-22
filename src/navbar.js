import React, {Component} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
      <div className="Navbar">
          <ul>
       <li><Link to="/home">Home</Link></li>
       <li><Link to="/arenor">Arenor</Link></li>
       <li><Link to="/weather">Väder</Link></li>
       <li><Link to="/covid">COVID19-Globalt</Link></li>
       <li><Link to="/covidCountry">COVID19-per-land</Link></li>
       <li><Link to="/Users">Konton-Hotell</Link></li>
       <li><Link to="/fortniteStore">Fortnite-Shop</Link></li>
       <li><Link to="/loginHotell">Logga in-Hotell</Link></li>
       <li><Link to="/login">Logga in</Link></li>
       <li><Link to="/testcovid">Test covid ny</Link></li>
       </ul>
      </div>
    );
  }
  
  export default Navbar;

