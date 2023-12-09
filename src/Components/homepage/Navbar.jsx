import React, { useState } from "react";
import logo from '../Assets/logo_maduvan.svg';
import ham from '../Assets/hamburger.png';
import donate from '../Assets/donation (1).png';
import './Navbar.css';
function Navbar()
{
  return (
< div className="Flex_bar">
  <div><img src={ham} height="20px"/></div>
  <div><img src={logo} height="125rem"></img></div>
  <button className="button"><img className="donate_icon" src={donate} />Donate</button>
 </div>
  );
};

export default Navbar;
