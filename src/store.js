import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/authSlice";
import { bookmarksReducer } from "./features/bookmarks/bookmarkSlice";
import { commentsReducer } from "./features/comments/commentSlice";
import { postsReducer } from "./features/home/homeSlice";
import { profileReducer } from "./features/profile/profileSlice";

export const Store = configureStore({
    reducer :{
        auth: authReducer,
        posts : postsReducer,
        bookmarks : bookmarksReducer,
        comments : commentsReducer,
        profile : profileReducer
    }
})


