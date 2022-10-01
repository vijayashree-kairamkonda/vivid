import { Routes, Route } from "react-router-dom";
import { Login } from "../features/auth/login";
import { SignUp } from "../features/auth/signup";
import { Home } from "../features/home/home";
import { Bookmark } from "../features/bookmarks/bookmark";
import { Profile } from "../features/profile/profile";
import { Comments } from "../features/comments/comments";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/bookmark" element={<Bookmark/>}/>
      <Route path="/profile/:username"  element={<Profile/>}/> 
      <Route path="/comments/:postID" element={<Comments/>}></Route>
      
    </Routes>
  );
};
