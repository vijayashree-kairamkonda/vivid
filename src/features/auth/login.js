import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import{useNavigate, useLocation} from "react-router-dom";
import { NavLink } from "react-router-dom"
import { loginHandler } from "./authSlice";

export const Login = ()=>{
const [cred,setCred] = useState({username:"",password:""});
const dispatch = useDispatch();
const navigate =useNavigate();
const location = useLocation();

const clickHandler = (e)=>{
    e.preventDefault();
    dispatch(loginHandler({cred,navigate,location}));
}

    return(
        <div className="container">
            <form className="auth-form" onSubmit={clickHandler}>
            <header className="auth-header">
                VIVID
            </header>
            <main className="auth-main">
                <label>Enter your username : </label>
                <input type="text"  onChange={(e)=>setCred((prev)=>({...prev,username:e.target.value}))}/>
                <label>Enter your password : </label>

                <input type="password"  onChange={(e)=>setCred((prev)=>({...prev, password:e.target.value}))} />
                
            </main>
            <footer className="auth-footer"> 

                <button  className="auth-btn" >LOGIN</button>


                <button  className="auth-btn-guest" onClick={()=>setCred((a)=>({...a, username: "vijayashree", password:"vijayashree"}))}>GUEST LOGIN</button>
                
           <div>Dont have an account? <NavLink to="/signup">SIGNUP</NavLink></div>
            </footer>
            </form>
        </div>
    )
}