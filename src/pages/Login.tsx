import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/store.tsx";
import {useNavigate} from "react-router-dom";
import UserModel from "../model/UserModel.ts";
import {loginUser} from "../reducers/UserSlice.ts";

const Login = () => {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const [login_email, setLoginUserEmail] = useState('');
  const [login_password, setLoginPassword] = useState('');

  function handleLogin(){
    const user : UserModel = {userEmail : login_email, userPassword: login_password};
    dispatch(loginUser(user));
  }

  useEffect(() => {
    if(isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <>
      {/*<!--  SignIn page  -->*/}
      <div id="signInPage" className="signStyle">
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card p-4 signCard" style={{ width: "28rem" }}>
            <h1 className="text-center mb-4 text-success">Login Page</h1>
            <h5 className="text-center mb-4 text-success">Green Shadow Agriculture</h5>
            <p className="text-muted text-center mb-3">Sign in to access the Crop Monitoring System</p>
            <form>
              <div className="mb-3">
                <label htmlFor="signInEmail" className="form-label">Email Address</label>
                <input type="email" className="form-control signInputs" id="signInEmail" placeholder="Enter your email" onChange={(e) =>setLoginUserEmail(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="signInPassword" className="form-label">Password</label>
                <input type="password" className="form-control signInputs" id="signInPassword" placeholder="Enter your password" onChange={(e)=>setLoginPassword(e.target.value)}/>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="remember"/>
                  <label className="form-check-label" htmlFor="remember">Remember Me</label>
              </div>
              <button id="btnSignIn" type="button" className="btn btn-primary w-100 signButton" onClick={handleLogin} >Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;