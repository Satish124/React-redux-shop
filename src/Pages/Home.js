import React from 'react';
import Products from "./Products";

const Home = () => {
  return (
    <div>
        <h2 className="heading">Welcome to IStore toolkit</h2>
        <section 
    style={{padding:"20px"}}>

    <h3>Products</h3>
    <Products/>

        </section>




    </div>
  )
}

export default Home