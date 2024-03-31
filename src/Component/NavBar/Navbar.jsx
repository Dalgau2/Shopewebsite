import profileimg from "../../assets/Image/pexels-andrea-piacquadio-837140-removebg-preview.png";
import { Avatar, IconButton, Box, MenuItem, Menu } from "@mui/material";
import logo from "../../assets/Image/3-removebg-preview.png";
import { motion } from "framer-motion";
import { UserContext } from "../Context/Context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaGifts } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import ShopCartItemIcon from "../IconsFoCart/CartItemIcon";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const dataOfItemsInCart = useSelector(({ data: { items } }) => {
    return items.filter((item) => item.quantity);
  }).reduce((acc, item) => acc + item.quantity, 0);
  const totalItemIncart = dataOfItemsInCart;
  console.log(totalItemIncart, "navBar console");
  // menu onClickOpen nad close code

  const handleClose = () => {
    console.log("cloae");
  };
  return (
    <>
      <div className="topbar" style={{ margin: "0%", padding: "0%" }}>
        <div
          className="navTopBar"
          style={{
            paddingRight: "4px",
            width: "100%",
            height: "25px",
            backgroundColor: "black",
          }}
        ></div>
        <div
          className="MainNaveContainer"
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="logo" style={{ minWidth: "30%", maxHeight: "50px" }}>
            <div
              style={{
                maxWidth: "30%",
                height: "50px",
                textAlign: "center",
                marginLeft: "50px",
              }}
            >
              <img
                src={logo}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  paddingTop: "10px",
                }}
                alt=""
              />
            </div>
          </div>
          <div className="NavBarDiv" style={{ width: "40%" }}>
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
              <div
                className="navbar"
                style={{ display: "flex", fontSize: "20px", color: "black" }}
              >
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
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ marginTop: "1px" }}>
                      <IoHome />
                    </Box>{" "}
                    Home
                  </Link>
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
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        display: "flex",
                      }}
                    >
                      {" "}
                      <Box sx={{ marginTop: "1px" }}>
                        <FaGifts />
                      </Box>
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
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        display: "flex",
                      }}
                    >
                      <Box sx={{ marginTop: "1px" }}></Box> catigore
                    </a>
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="nav-items"
                  style={{
                    marginLeft: "4px",

                    width: "130px",
                    textAlign: "center",
                  }}
                >
                  <Link
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ marginTop: "1px" }}>
                      <RiContactsLine />
                    </Box>
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
          <div
            className="LoginButton"
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="profile"
              style={{ maxWidth: "10%", height: "10%", marginRight: "10px" }}
            >
              <IconButton sx={{ width: "50px", height: "50px" }}>
                <Avatar
                  // onClick={handleClick}
                  sx={{ border: "1px solid lightgray" }}
                  src="https://4xwallpapers.com/wp-content/uploads/2023/04/luffy-wallpaper-780x439.jpg"
                ></Avatar>
                
              </IconButton>
            </div>
            <div></div>
            <div
              style={{
                width: "200px",
                justifyContent: "space-around",
                display: "flex",
              }}
            >
              <h3>
                <ShopCartItemIcon data={totalItemIncart} />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
