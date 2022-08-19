// chote chote part m store klrana taaki easy ho manage krna 
import { createSlice } from '@reduxjs/toolkit'


const initialState=[];

const cartSlice = createSlice({

    name:'cart',     
    initialState,
    reducers:{           // this is pure fn ye  state ko change krti h

        add(state,action) {       
       // redux  or return[...state,action.payload]; ye krte h but createSlice methid ki vjh s hm directly mutate kr skte h niche ki trh otherwise aise krna pdta 
     state.push(action.payload)// state ko mutate kr rhe h directly
        },
remove(state,action){

    return state.filter((item) => item.id!==action.payload)
},
        
}
}
)
export const{add,remove}=cartSlice.actions;
export default cartSlice.reducer;

// {type:'add/cart',payload} phle aise bnani pdti thi action