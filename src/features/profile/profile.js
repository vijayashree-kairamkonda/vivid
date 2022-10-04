import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { NavBar } from "../../components/navbar";
import { PostCard } from "../../components/postCard";
import { getUser, addFollow, removeFollow } from "../profile/profileSlice";

export const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const { posts } = useSelector((store) => store.posts);
  const { users } = useSelector((store) => store.profile);
  const authStore = useSelector((store) => store.auth);
  const { token } = authStore

  console.log(authStore.user.username);

  const filteredUser = users.filter((user) => user.username === username);
  const filteredPosts = posts.filter((post) => post.username === username);

  useEffect(() => {
    dispatch(getUser(username));
  }, [username]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="wrapper wrapper-profile">
          {filteredUser.map((user) => (
            <div className="profile-box">
              <div>
                <img
                  src={user.profileIMG}
                  className="profile-box-img"
                  alt="profile image"
                />
              </div>
              <div className="profile-username">@{user.username}</div>
              <div className="profile-first-name">{user.firstName}</div>
              <div className="profile-bio"> {user.bio}</div>
              <NavLink to={user.githubURL} className="profile-url">{user.githubURL}</NavLink>
              <div className="profile-following">
                <div className="following-box">
                  <span>Post</span> <span>{filteredPosts.length}</span>{" "}
                </div>
                <div className="following-box">
                  <span>Followers</span> <span>{user.followers.length}</span>
                </div>
                <div className="following-box">
                  <span>Following</span> <span>{user.following.length}</span>
                </div>
              </div>
              {
                user.username !== authStore.user.username ?
                 !user?.followers?.some(
                  (el) => el?.username === user?.username
                ) ? <div className="profile-update">
                <button className="update-btn" onClick={() => {
                  dispatch(addFollow({ token, followID: user?._id }));
                }}>Follow</button>
              </div> : <button className="update-btn" onClick={() => {
                  dispatch(removeFollow({ token, followID: user?._id }));
                }}>UnFollow</button> 
                : null
              }
              
            </div>
          ))}

          {filteredPosts.map((post) => (
            <PostCard data={post} />
          ))}
        </div>{" "}
      </div>
    </>
  );
};

