import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[],
    followingData :[],
    singleUser:null,
    profileLoader :"idle",
}

// export const getUser = createAsyncThunk("posts/getUser", async(userID)=>{ console.log(userID)
//     try{
//             const response = await axios.get(`/api/users/${userID}`);
//             return response.data; 
            
//     }catch(error){
//         console.log(error)
//     }
// })

export const getUser = createAsyncThunk("profile/getUser", async (userID) => { console.log(userID)
    try {
      const response = await axios.get(`/api/users/${userID}`);
      return response;
    } catch (error) {
      console.log(error.response);
    }
  });

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers:{},
    extraReducers:{
        [getUser.fulfilled] : (state,action)=>{
            state.singleUser = action?.payload?.user;
        }
    }
})

const profileReducer = profileSlice.reducer;
export {profileReducer}