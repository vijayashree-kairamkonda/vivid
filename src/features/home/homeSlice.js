import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postsLoader: "idle",
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await axios.get("api/posts");
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ token, data }) => {
    const postData = data;
    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: { authorization: token },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ token, data }) => {
    try {
      const response = await axios.delete(`/api/posts/${data._id}`, {
        headers: { authorization: token },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ token, data, newContent }) => {
    const postData = newContent;
    try {
      const response = await axios.post(
        `/api/posts/edit/${data._id}`,
        { postData },
        {
          headers: { authorization: token },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addLiked = createAsyncThunk(
  "posts/addLiked",
  async ({ token, data }) => {
    try {
      const response = await axios.post(
        `/api/posts/like/${data._id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeLiked = createAsyncThunk(
  "posts/removeLiked",
  async ({ token, data }) => {
    try {
      const response = await axios.post(
        `/api/posts/dislike/${data._id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.postsLoader = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.postsLoader = false;
    },
    [createPost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [editPost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [addLiked.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [removeLiked.fulfilled]: (state,action)=>{
        state.posts = action.payload.posts;
    }
  },
});

const postsReducer = postsSlice.reducer;
export { postsReducer };
