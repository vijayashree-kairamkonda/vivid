import {NavBar} from "../../components/navbar";
import { PostCard } from "../../components/postCard";
import { CreatePost } from "../../components/createPost";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./homeSlice";
import { useSelector } from "react-redux";

export const Home = ()=>{

    const dispatch = useDispatch();
    const {posts,postsLoader} = useSelector((state)=>state.posts);
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])
    
    return(
       <>
       <NavBar/>

       <div className="container">
        <main className="wrapper">
            <br/>
            <CreatePost/><br/>

            { !postsLoader &&
                posts.slice().reverse().map((post)=><PostCard data={post} key={post._id}/>)
            }
                
                
        </main>
<aside className="home-aside">
ASIDE
</aside>
       </div>
       </>
       
    )
}