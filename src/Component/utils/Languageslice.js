import { createSlice } from "@reduxjs/toolkit";

const Langslice = createSlice({
    name : "lang",
    initialState:{
        language:"Eng",
        langquestion:null,
    },

    reducers:{
        addchangelanguage : (state,action) => {
            state.language = action.payload
        },
        addlanguagequestion:(state,action) => {
            state.langquestion = action.payload;
        }
    }
})


export default Langslice.reducer;

export const { addchangelanguage , addlanguagequestion} = Langslice.actions;