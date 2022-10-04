import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { createPost } from "../features/home/homeSlice";

export const CreatePost = ()=>{

  const [postContent, setPostContent] = useState("");
  const dispatch = useDispatch();
  const {token} = useSelector((state)=>state.auth)
  const {user} = useSelector((store)=>store.auth)

  const createPostHandler= ()=>{
    if(postContent.length > 0){
      dispatch(createPost({token, data:{content:postContent}}));
      
    }
    setPostContent("");
    
    
  }
    return(
        <>
          <div className="post-card">
        <header className="post-head">
          <div>
            <img
              className="profile-img"
              src={user?.profileIMG}
              alt="profile"
            />
          </div>
          <div className="profile-data">
           <input type="text" className="post-content" placeholder="Post your thoughts..." onChange={(e)=>setPostContent(e.target.value)}/>
          </div>
        </header>
       
        <footer className="create-post-footer ">
         <button className="post-btn" onClick={createPostHandler}>Post</button>
        </footer>
      </div>

        </>
    )
}