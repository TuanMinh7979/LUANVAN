import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        value: 0,
    },
    reducers:{
        incre: (state)=>{
            state.value +=1
            
        },
        decre: (state)=>{
            state.value -=1
        },
        increByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const {incre, decre, increByAmount} = counterSlice.actions
export default counterSlice.reducer;