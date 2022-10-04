import { Routes, Route } from "react-router-dom";
import { Login } from "../features/auth/login";
import { SignUp } from "../features/auth/signup";
import { Home } from "../features/home/home";
import { Bookmark } from "../features/bookmarks/bookmark";
import { Profile } from "../features/profile/profile";
import { Comments } from "../features/comments/comments";
import { RequiresAuth } from "../require-auth";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<RequiresAuth><Home/></RequiresAuth>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/bookmark" element={<RequiresAuth><Bookmark/></RequiresAuth>}/>
      <Route path="/profile/:username"  element={<RequiresAuth><Profile/></RequiresAuth>}/> 
      <Route path="/comments/:postID" element={<RequiresAuth><Comments/></RequiresAuth>}></Route>
      
    </Routes>
  );
};
