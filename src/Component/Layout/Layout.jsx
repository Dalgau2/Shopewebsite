import { Navigate, Outlet } from "react-router"
import Footer from "../Footer/Footer"
import Navbar from "../NavBar/Navbar"
import LoginPage from "../Login/Login"
import { useContext, useState } from "react"
import { UserContext } from "../Context/Context"
import SwipTwo from "../Swiper/SwiperSlide"
import Swiperslide from "../Swiper/SwiperSlide"
const Layout=()=>{
    const {currentUser}=useContext(UserContext)
    return(
        <> 
        <div className="container">
        <div className="header" style={{width:"100%",position:"fixed",zIndex:12,top:0}}>
          <div style={{width:"100%",background:"white"}}><Navbar/></div>
        </div>
        <div className="outlet" style={{minHeight:"100vh",marginTop:"88px"}}>
            <Outlet/>
        </div>
        <div className="footer"style={{bottom:0,padding:"0px"}}>
            <Footer/>
        </div>
    </div> 
        </>
    )
}
export default Layout