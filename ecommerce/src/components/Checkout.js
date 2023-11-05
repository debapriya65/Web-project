import React from 'react'
import ResponsiveAppBar from '../components/Navigation';
import SignIn from '../components/SignIn';
import {data} from '../data/products'
import Products from './Products';
import Cart from './Cart';
function Checkout() {
  
  return (
    <div>
        <ResponsiveAppBar/>
        <div style={{margin:10,minHeight:'900px',display: 'flex',flexDirection:'col',justifyContent:'center',alignItems:'center'}}>
            <Cart/>
        </div>
       
       
    </div>

  )
}

export default Checkout