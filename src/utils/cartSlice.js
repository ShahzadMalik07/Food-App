import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        Item:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.Item.push(action.payload)
        },
        removeitem: (state)=>{
            state.Item.pop()
        },
        clearcart:(state)=>{
            state.Item.length = 0
        }
    }
})

export const {addItems, removeitem, clearcart} = cartSlice.actions

export default cartSlice.reducer