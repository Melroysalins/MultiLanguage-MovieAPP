import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
    name : "user",
    initialState : {
        userinfo : null,
    },

    reducers:{

        adduserinfo : (state,action) => {

            state.userinfo = action.payload;
        },
        removeuser :(state)=>{
            state.userinfo = null;
        }
    }
})



export default Userslice.reducer;


export const {adduserinfo , removeuser} = Userslice.actions;