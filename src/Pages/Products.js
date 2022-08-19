import React, { useState,useEffect } from 'react'
// action ko dispatch k liye hook chiye
import { useDispatch,useSelector } from "react-redux";
import {add} from '../store/cartSlice';
import { fetchProduct, STATUSUSE } from '../store/productSlice';
import loader from "./loader.gif"

const Products = () => {

    const dispatch= useDispatch(); // ye action ko call krta h 

    // const [products,setProducts]=useState([]); // iski need ni h redux store m

    const {data:products,status}=useSelector((state)=>state.product)  // data,status ye redux k under state h jo hme nikalna h store s or loop m nihe map m products. s h to data ko rename:
    useEffect(()=>{  // lekin hme async call krna h measn product load s phle loader gho uske baad product load ho to isko redux store m slice s kro  products ko agr multipe pages p use hogi products reduc store m kro 
        dispatch(fetchProduct());
        // const fetchProducts = async()=>{
        //     const res = await fetch('https://fakestoreapi.com/products'); // ye string krta h to json m convert kro
        //     const data= await res.json();
        //     console.log(data);
        //     setProducts(data);
        // }
        // fetchProducts()
    },[]);
    const handleAdd=(product)=>{
    // isko hmare redux store m store krna h action dispacth krte h 
    dispatch(add(product)) // is fn ko call krna h((payload means jo bhi milna h eg products))
    }

    // check kya ye loading state h 
     if (status===STATUSUSE.LOADING){
      return <img src={loader}  style={{marginLeft:'50%'}}/> 
      {/* <img src="../store/loader.gif"/> */}
     
      
     
    }
    if(status===STATUSUSE.ERROR){
      return <h2>something went wrong</h2>
    }
  return (
    <div className='productswrapper'>
 {
    products.map(product=>(

        <div className='card' key ={product.id}>
            <img src={product.image} alt=""/>
            <h4 className='name'>{product.title}</h4>
            <h4 className='name'>{product.price}</h4>
            <button className='btn' onClick={()=> handleAdd(product)}>Add to cart</button>
            </div>
    ))
 }
    
    </div>
  )
}

export default Products