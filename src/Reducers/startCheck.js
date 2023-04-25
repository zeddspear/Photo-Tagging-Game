import { createSlice } from "@reduxjs/toolkit";

const startCheck = createSlice({
    name: "startCheck",
    initialState:{value : {start: false}},
    reducers:{
        checkStart : (state,action)=>{
         state.value.start = action.payload;
        }
    }
})

export const {checkStart} = startCheck.actions;


export default startCheck.reducer;