import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Menu({cartNum}) {
  return (
    <div className='menu'>
      <Link to='/'>Mecevi koje pratim</Link>
      <Link to='/meceviKojePratim'  className='cart-items'>
      <IoMdNotificationsOutline/>
      <p className='cart-num'>{cartNum}</p>
      </Link>
    </div>
  );
}

export default Menu;