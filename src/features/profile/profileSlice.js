import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[],
    followingData :[],
    singleUser:null,
    profileLoader :"idle",
}

export const getUsers = createAsyncThunk("profile/getUsers", async () => {
    try {
      const response = await axios.get(`/api/users/`);
      return response;
    } catch (error) {
      console.log(error.response);
    }
  });
export const getUser = createAsyncThunk("profile/getUser", async (userID) => {
    try {
      const response = await axios.get(`/api/users/${userID}`);
      return response;
    } catch (error) {
      console.log(error.response);
    }
  });


  export const addFollow = createAsyncThunk(
    "posts/addFollow",
    async ({ token, followID }) => {
      try {
        const response = await axios.post(
          `/api/users/follow/${followID}`,
          {},
          {
            headers: { authorization: token },
          }
        );
        return response.data;
      } catch (error) {
        console.log(error.response);
      }
    }
  );
  
  export const removeFollow = createAsyncThunk(
    "posts/addFollow",
    async ({ token, followID }) => {
      try {
        const response = await axios.post(
          `/api/users/unfollow/${followID}`,
          {},
          {
            headers: { authorization: token },
          }
        );
        return response.data;
      } catch (error) {
        console.log(error.response);
      }
    }
  );
  

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers:{},
    extraReducers:{
        [getUser.fulfilled] : (state,action)=>{
            state.singleUser = action?.payload?.user;
        },
        [getUsers.fulfilled] : (state,action)=>{
          state.users = action?.payload?.data?.users;
      }
    }
})

const profileReducer = profileSlice.reducer;
export {profileReducer}