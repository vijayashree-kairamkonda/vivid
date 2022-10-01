import { useDispatch, useSelector } from "react-redux";
import { CommentCard } from "../../components/commentCard";
import { NavBar } from "../../components/navbar";
import { useParams } from "react-router-dom";
import { PostCard } from "../../components/postCard";
import { addComment } from "./commentSlice";
import { useState } from "react";





export const Comments = ({ comment }) => {
  const { postID } = useParams();
  const { posts } = useSelector((store) => store.posts);
  const postClicked = posts.filter((post) => post._id === postID);
const {token} = useSelector((store)=>store.auth);
  const { comments } = useSelector((store) => store.comments);
  const dispatch = useDispatch();
  const[content, setContent] = useState();

  
  

  

  return (
    <>
      <NavBar />
      <div className="container">
        <main className="wrapper">
          {postClicked.slice().map((post) => (
            <PostCard data={post} />
          ))}

          <div>
            <div className="cmt-input-box">
              <input type="text" className="cmt-input" onChange={(e)=>setContent(e.target.value)}/>
              <button className="cmt-btn"  onClick={() => { console.log(content)
                dispatch(
                  addComment({ token, postID, data: { text: content } })
                );
                setContent("");
              }}>comment</button>
            </div>
          </div>

          {comments
            .slice()
            .reverse()
            .map((comment) => (
              <CommentCard comment={comment}/>
            ))}
        </main>
      </div>
    </>
  );
};
