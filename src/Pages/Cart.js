import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import {remove} from "../store/cartSlice";

const Cart = () => {
    const dispatch=useDispatch();

    const products= useSelector(state=>state.cart)
// products jo changes hue h vo milega  useselctor usi ko show kr do cart m
const handleRemove=(productId)=>{ // action ko dispactch krna h store chnge h to 
dispatch(remove(productId))  //(iske ander actrion jo hme use krni h)
}
  return (
    <div>

        <h2>Cart</h2>
        <div className='cartWrapper'>
            {products.map(product=>(
                <div className='cartCard'>
                    <img src={product.image} alt=""/>
                    <h5>{product.title}</h5>
                    <h6>{product.price}</h6>
                    <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Cart