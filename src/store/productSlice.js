// chote chote part m store klrana taaki easy ho manage krna 
import { createSlice } from '@reduxjs/toolkit'



// const initialState=[];
export const STATUSUSE= Object.freeze({   // is object ko free ze kr skyte h taakikoi bhi chnage na kr paye proprty bhaar s 
    IDLE:'idele',
    ERROR:'error',
    LOADING:'loading'    // YE STATUS MULTIPLE API P USE KR RSKTE H  EXPORT KRKE 
}
);
const productSlice = createSlice({

    name:'product',     
    initialState:{
     data:[] , // data product list
     status:STATUSUSE.IDLE, //measns loading status h or error vo jb string value use krni hoti h to anum use krte h but hum ts m h vo js bna skte h vese ststuse jesa YHA 
    },
    reducers:{           // this is pure fn ye  state ko change krti h

        setProduct(state,action) { 
            // do not do this asyn reducer k under s ni kr skte h   uske liye thuk use krte h 
            // const res = await fetch('https://fakestoreapi.com/products');    
      
     state.data =action.payload// state ko mutate kr rhe h directly
        },
setStatus(state,action){
state.status=action.payload;
    // return state.filter((item) => item.id!==action.payload)
},
        
}
}
)
export const {setProduct,setStatus}=productSlice.actions;
export default productSlice.reducer;

//Thunks middleware api call reducer k under kr skte h 
// thunks do tareeke s kr skte h or 2snd redux toolkit m kese use kr skte h 
export function fetchProduct(){  // is fn ko import kro product m 
// thunk ek fbn h uske ander s nyi fn call krte h 

return async function fetchProductThunk(dispatch,getState){ // get state current state ko get krne k liye use 
// try catch use kro kyuki network request krni h 
// const prop =getstate().data // jo bhi chiye get m but need ni h 
dispatch(setStatus(STATUSUSE.LOADING)); //CURRENT STATE LOADING KR DIYA H 
    try{
        const res = await fetch('https://fakestoreapi.com/products'); // ye string krta h to json m convert kro
        const data= await res.json();

        dispatch(setProduct(data));  // ye setproducts cartslice s export krke milega 
       dispatch(setStatus(STATUSUSE.IDLE))
    
    }catch(err){
        console.log(err)
        dispatch(setStatus(STATUSUSE.IDLE))
    }
}}



