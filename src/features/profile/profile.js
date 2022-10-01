import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/navbar";
import { getUser } from "../profile/profileSlice";

export const Profile = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  
console.log(username)


  useEffect(() => {
    dispatch(getUser(username));
  }, [username]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="wrapper">
          <div className="profile-box">
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/75258563?v=4"
                className="profile-box-img"
                alt="pic"
              />
            </div>
            <div className="profile-username">username</div>
            <div className="profile-first-name"> first name</div>
            <div className="profile-bio"> bio</div>
            <div className="profile-url">url</div>
            <div className="profile-following">
              <div className="following-box">
                <span>Post</span> <span>0</span>{" "}
              </div>
              <div className="following-box">
                <span>Followers</span> <span>0</span>
              </div>
              <div className="following-box">
                <span>Following</span> <span>0</span>
              </div>
            </div>
            <div className="profile-update">
              <button className="update-btn">Update Profile</button>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
