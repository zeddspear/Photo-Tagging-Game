import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../Config/firebase";
import { getDocs , collection } from "firebase/firestore";



const charactersDataRef = collection(db,"Characters");

// Async data fetching and using Redux state management AsyncThunk
export const getData = createAsyncThunk("Data/getData",async (args,{rejectWithValue})=>{

    try{

        const data = await getDocs(charactersDataRef);
        const filteredData = data.docs.map((doc) => ({id: doc.id,...doc.data()}));
        const arrangedData = filteredData.sort(function(a,b){if(a.index < b.index){return -1}else if(a.index > b.index){return 1}else{return undefined}});
        return arrangedData ;

    }catch(err){
        rejectWithValue(err);
    }
})



    const CharactersData = createSlice({
        name:"Data",
        initialState: {value: [],
                        loading:false
                    },
        reducers:{
            changeData:(state,actions)=>{
                state.value = actions.payload;
            }
        },
        extraReducers:{
            [getData.pending]: (state,actions)=>{
                state.loading = true; 
            },
            [getData.fulfilled]: (state,actions)=>{
                state.loading = false;
                state.value = actions.payload 
            },
            [getData.rejected]: (state,actions)=>{
                state.loading = false;
                state.value = "Error occured fetching data"
            },

        }
    })




export const {changeData} = CharactersData.actions;

export default CharactersData.reducer;