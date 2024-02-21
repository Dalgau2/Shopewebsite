import { Typography, Button } from "@mui/material";
import logo from "../../assets/Image/3-removebg-preview.png"
import { motion } from "framer-motion";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
const Navbar = () => {
  const {currentUser}=useContext(UserContext)
  return (
    <>
      <div className="topbar" style={{margin:"0%",padding:"0%"}}>
        <div
          className="navTopBar"
          style={{
            paddingRight: "4px",
            width: "100%",
            height: "25px",
            backgroundColor: "black",
          }}
        ></div>
        <div className="MainNaveContainer" style={{display:"flex",alignItems:"center"}}>
        <div className="logo" style={{minWidth:"30%",maxHeight:"50px"}}>
          <div style={{maxWidth:"30%",height:"50px",textAlign:"center",marginLeft:"50px"}}><img src={logo} 
         style={{objectFit:"cover",width:"100%",height:"100%",paddingTop:"10px"}} alt="" /></div>
        </div>
        <div className="NavBarDiv" style={{width:"40%"}}>
          <div
            className="container"
            style={{
              width: "100%",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              // borde "2px solid black",
              // margin: "2px",
              alignItems: "center",
            }}
          >
            <div className="navbar" style={{ display: "flex" }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="nav-items"
                style={{
                  // marginLeft: "4px",
                  width: "100px",
                  textAlign: "center",
                }}
              >
                <a href="#" style={{ textDecoration: "none" }}>
                  Home
                </a>
              </motion.div>
              <div
                className="nav-items"
                style={{
                  marginLeft: "4px",

                  width: "100px",
                  textAlign: "center",
                }}
              >
                <motion.div
                  className="div"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="#" style={{ textDecoration: "none" }}>
                    {" "}
                    Product
                  </a>
                </motion.div>
              </div>
              <div
                className="nav-items"
                style={{
                  marginLeft: "4px",

                  width: "100px",
                  textAlign: "center",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="#" style={{ textDecoration: "none" }}>
                    catigore
                  </a>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="nav-items"
                style={{
                  marginLeft: "4px",

                  width: "100px",
                  textAlign: "center",
                }}
              >
                <a href="#" style={{ textDecoration: "none" }}>
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="LoginButton" style={{width:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div className="profile" style={{maxWidth:"10%",height:"10%",marginRight:"10px"}}>
            <img src={logo} alt="" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"100%"}} />
          </div>
          <div><h4>{currentUser}</h4></div>
        </div>
      </div>
        </div>
        {/* <div className="NavBarDiv">
          <div
            className="container"
            style={{
              width: "100%",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              // borde "2px solid black",
              // margin: "2px",
              alignItems: "center",
            }}
          >
            <div className="navbar" style={{ display: "flex" }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="nav-items"
                style={{
                  // marginLeft: "4px",
                  width: "100px",
                  textAlign: "center",
                }}
              >
                <a href="#" style={{ textDecoration: "none" }}>
                  Home
                </a>
              </motion.div>
              <div
                className="nav-items"
                style={{
                  marginLeft: "4px",

                  width: "100px",
                  textAlign: "center",
                }}
              >
                <motion.div
                  className="div"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="#" style={{ textDecoration: "none" }}>
                    {" "}
                    Product
                  </a>
                </motion.div>
              </div>
              <div
                className="nav-items"
                style={{
                  marginLeft: "4px",

                  width: "100px",
                  textAlign: "center",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="#" style={{ textDecoration: "none" }}>
                    catigore
                  </a>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="nav-items"
                style={{
                  marginLeft: "4px",

                  width: "100px",
                  textAlign: "center",
                }}
              >
                <a href="#" style={{ textDecoration: "none" }}>
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </div> */}
        {/* <div className="LoginButton"></div>
      </div> */}
    </>
  );
};
export default Navbar;
