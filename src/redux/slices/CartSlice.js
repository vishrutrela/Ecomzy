import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)//jo bhi tumne input paramenter set kiya h use action .payload darshata hai
        },
        remove:(state,action)=>{
            return state.filter((item)=> item.id !== action.payload)
        },
    }
})

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer ;