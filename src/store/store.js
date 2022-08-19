import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
const store=configureStore({

    reducer:{ // yha kitne bhi reducer add kr skte ho 
        cart:cartReducer,
        product:productReducer // isko register krna pdega product slice
   
    }
,


});
export default store;