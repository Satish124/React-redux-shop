import React from 'react';
import {Link} from "react-router-dom";
import "../index.css";
import { useSelector } from 'react-redux';// dynamic data pass dikahah ye selector ye hook us data ko subscribe krta h measn chnage hone p apne ap dega 

const Header = () => {

    const items=useSelector((state)=>state.cart) // state.jo value change ho to dikhe redux extensio m edkho cart change ho to items m nayi value milegi
    console.log(items)
  return (
    <div style={{display:'flex' ,justifyContent:'space-around',padding:'15px',boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',alignItems:'center'/*,position:'fixed'*/,width:'100%',marginTop:'0px',backgroundColor:'#fff'}}><span className="logo">IStore</span>
    <div>

        <Link to ="/" className="navlink">Home</Link>
        <Link to="cart" className="navlink">Cart</Link>  
        <Link to="cart-item" className="navlink">🛒{items.length}</Link>   </div>
    
    </div>
  )
}

export default Header