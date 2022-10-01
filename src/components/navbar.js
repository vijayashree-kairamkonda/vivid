import "../App.css";
import {NavLink, useNavigate}  from "react-router-dom";
// import { useSelector } from "react-redux";
import { userLogout } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";



export const NavBar = ()=>{

    // const {isLoggedIn} = useSelector((store)=>store.auth);
    const dispatch = useDispatch();
    const {user} = useSelector((store)=>store.profile);
   const navigate = useNavigate();

   console.log(user)
    return(
        <header className="nav">
            <div className="nav-title">
                
            <NavLink className="nav-link" to="/" >VIVID</NavLink>

            </div>
            <div className="nav-components">
                <div className="nav-pill" ><NavLink className="nav-link" to="/bookmark" >BOOKMARKS</NavLink></div>
                <div className="nav-pill"><button className="nav-link" onClick={()=>(navigate(`/profile/${user?.username}`))}>PROFILE</button></div>
               
               {
                localStorage.getItem("auth")? <div className="nav-pill"><NavLink className="nav-link" to="/login" onClick={()=>dispatch(userLogout())}>LOGOUT
                </NavLink></div>: <div className="nav-pill"><NavLink className="nav-link" to="/login">LOGIN
                </NavLink></div>
               }
                

            </div>
        </header>
        
    )
}