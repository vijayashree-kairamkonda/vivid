import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/navbar";
import { PostCard } from "../../components/postCard";
import { getUser } from "../profile/profileSlice";

export const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const { posts } = useSelector((store) => store.posts);
  const { users } = useSelector((store) => store.profile);

  const filteredUser = users.filter((user) => user.username === username);
  const filteredPosts = posts.filter((post) => post.username === username);
  console.log(filteredUser);

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
              <div className="profile-username">{user.username}</div>
              <div className="profile-first-name">{user.firstName}</div>
              <div className="profile-bio"> {user.bio}</div>
              <div className="profile-url">{user.githubURL}</div>
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
              {/* <div className="profile-update">
              <button className="update-btn">Update Profile</button>
            </div> */}
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
