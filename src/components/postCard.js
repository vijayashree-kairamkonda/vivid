import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  editPost,
  addLiked,
  removeLiked,
} from "../features/home/homeSlice";
import {
  addBookmark,
  deleteBookmark,
} from "../features/bookmarks/bookmarkSlice";
import { NavLink } from "react-router-dom";
import { getComments } from "../features/comments/commentSlice";

export const PostCard = ({ data }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  const [options, showOptions] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [content, setContent] = useState(data.content);
  const { bookmarks } = useSelector((state) => state.bookmarks);

  const isLiked = data?.likes?.likedBy?.some(
    (name) => name.username === user.username
  );

  const isBookMarked = bookmarks.some((post) => post._id === data._id);

  return (
    <>
      <div className="post-card">
        <header className="post-head">
          <div>
            <img className="profile-img" src={data.img} alt="profile" />
          </div>
          <div className="profile-data">
            <div className="profile-username">{data.username}</div>
            <div className="profile-bio">{data.bio}</div>
          </div>
          {options && (
            <div className="post-opt-box">
              <div
                className="post-opt"
                onClick={() => setToggleEdit((a) => !a)}
              >
                Edit
              </div>
              <div
                className="post-opt"
                onClick={() => dispatch(deletePost({ token, data: data }))}
              >
                Delete
              </div>
            </div>
          )}
          {data?.username === user?.username ? (
            <div className="profile-opt" onClick={() => showOptions((a) => !a)}>
              <i className="far fa-ellipsis-v"></i>
            </div>
          ) : null}
        </header>
        {toggleEdit ? (
          <div className="edit-box">
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              className="edit-save"
              onClick={() => {
                setToggleEdit(false);
                dispatch(
                  editPost({
                    token,
                    data: data,
                    newContent: content,
                  })
                );
                console.log(content);
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <main className="post-main">{data?.content}</main>
        )}
        <footer className="post-footer">
          <div>
            {isLiked ? (
              <i
                className="fas fa-heart post-card-icon"
                onClick={() => dispatch(removeLiked({ token, data }))}
              ></i>
            ) : (
              <i
                className="fal fa-heart post-card-icon"
                onClick={() => dispatch(addLiked({ token, data }))}
              ></i>
            )}
            <span>{data?.likes.likeCount}</span>
          </div>
          <div>
           <NavLink to={`/comments/${data._id}`} ><i className="fal fa-comment post-card-icon" onClick={()=>dispatch(getComments({data}))}></i></NavLink> 
            <span>{data?.comments?.length}</span>
          </div>
          <div>
            {isBookMarked ? (
              <i
                class="fas fa-bookmark post-card-icon"
                onClick={() => dispatch(deleteBookmark({ token, data }))}
              ></i>
            ) : (
              <i
                className="fal fa-bookmark post-card-icon"
                onClick={() => dispatch(addBookmark({ token, data }))}
              ></i>
            )}
          </div>
        </footer>
      </div>
    </>
  );
};
