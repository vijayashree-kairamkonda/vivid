import { NavLink } from "react-router-dom";
import { signupHandler } from "./authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import{useNavigate, useLocation} from "react-router-dom";

export const SignUp = () => {
const [entries, setEntries] = useState({
    username:"",
    password: "",
    firstname: "",
    lastname: "",
});
const dispatch = useDispatch();
const navigate = useNavigate();
const location = useLocation();
const clickHandler = (e)=>{
    e.preventDefault();
    dispatch(signupHandler({entries,navigate,location}))
}

  return (
    <div className="container">
      <form className="auth-form" onSubmit={clickHandler}>
        <header className="auth-header">VIVID</header>
        <main className="auth-main">
          <input type="text" placeholder="First Name" onChange={(e)=>setEntries((a)=>({...a, firstname : e.target.value}))}/>
          <input type="text" placeholder="Last Name"  onChange={(e)=>setEntries((a)=>({...a, lastname : e.target.value}))}/>
          <input type="text" placeholder="Username" onChange={(e)=>setEntries((a)=>({...a,username : e.target.value}))}/>
        <input type="password" placeholder="Password" onChange={(e)=>setEntries((a)=>({...a,password: e.target.value}))}/>
        </main>
        <footer className="auth-footer">
          <button className="auth-btn">SIGN UP</button>
          <div>
            Already have an account? <NavLink to="/login">LOGIN</NavLink>
          </div>
        </footer>
      </form>
    </div>
  );
};
