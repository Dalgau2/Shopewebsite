import { useContext, useState } from "react";
import "./Login.css";
import { UserContext } from "../Context/Context";
import { Navigate, useNavigate } from "react-router";
import { Button } from "@mui/material";

const LoginPage = () => {
  const naviagte = useNavigate();
  const [userName, setuserName] = useState();
  const handelChange = (e) => {
    setuserName(e.target.value);
  };
  const { setCurrentUser, currentUser } = useContext(UserContext);
  // console.log("yourvalu",currentUser)
  const handelClick = (e) => {
    e.preventDefault();
    setCurrentUser(userName);
    naviagte("/");
  };
  return (
    <form>
      <h3>Login Here</h3>

      <label>Username</label>
      <input
        type="text"
        placeholder="Enter your Name"
        id="username"
        onChange={handelChange}
      />

      {/* <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/> */}

      <Button
        variant="outlined"
        sx={{ backgroundColor: "blue", color: "white",mt:"20px",width:"100%",ml:"10px" }}
        onClick={handelClick}
      >
        Login here
      </Button>
      <div className="social"></div>
    </form>
  );
};
export default LoginPage;
