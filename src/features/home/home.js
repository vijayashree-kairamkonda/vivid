import { NavBar } from "../../components/navbar";
import { PostCard } from "../../components/postCard";
import { CreatePost } from "../../components/createPost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./homeSlice";
import { useSelector } from "react-redux";
import { getUsers } from "../profile/profileSlice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const { posts, postsLoader } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.profile);
  const authStore = useSelector((state)=> state.auth);
const navigate = useNavigate()
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <NavBar />

      <div className="container">
        <main className="wrapper mt">
          <br />
          <CreatePost />
          <br />

          {!postsLoader &&
            posts
              .slice()
              .reverse()
              .map((post) => <PostCard data={post} key={post._id} />)}
        </main>
        <aside className="home-aside">
          <div className="aside-heading">People you may know : </div>
          {users.map((user) => ( user?.username !== authStore?.user?.username ?
            <div className="profile-aside" onClick={()=>navigate(`/profile/${user.username}`)}>
              <img className="profile-img" src={user.profileIMG}></img>
              <div>@{user.username}</div>
            </div>
            : null
          ))}
        </aside>
      </div>
    </>
  );
};
