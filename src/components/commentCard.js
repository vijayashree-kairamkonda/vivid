import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteComment, editComment } from "../features/comments/commentSlice";

export const CommentCard = ({ comment }) => {
  const { users } = useSelector((store) => store.profile);
  const { user, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { postID } = useParams();
  const [options, showOptions] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [content, setContent] = useState();
  return (
    <>
      <div className="post-card">
        <header className="post-head">
          <div>
            <img
              className="profile-img"
              src={users
                ?.filter((user) => user.username === comment.username)
                ?.slice()
                ?.map((user) => user.profileIMG)}
              alt="profile"
            />
          </div>

          <div className="profile-data">
            <div className="profile-username">{comment.username}</div>
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
                onClick={() =>
                  dispatch(
                    deleteComment({ token, postID, commentID: comment._id })
                  )
                }
              >
                Delete
              </div>
            </div>
          )}

          {comment?.username === user?.username ? (
            <div className="profile-opt">
              <i
                className="far fa-ellipsis-v"
                onClick={() => showOptions((a) => !a)}
              ></i>
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
                  editComment({
                    token,
                    postID,
                    commentID: comment._id,
                    newContent: { text: content },
                  })
                );
                setContent("");
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <main>
            <div className="post-main">{comment.text}</div>
          </main>
        )}
      </div>
    </>
  );
};
