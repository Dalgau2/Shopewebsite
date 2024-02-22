import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import slidedata from "../FashionData/fashion.json";
import { Box, Button, Typography } from "@mui/material";

const Swiperslide = () => {
  console.log(slidedata);

  return (
    <Box sx={{}}>
      <Swiper 
        style={{ height: "400px" ,borderRadius:"15px",margin:"0px"}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {/* <SwiperSlide>
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <img
              src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", flex:1 }}
            />
            <div className="tittle" style={{ position: "absolute", top: "30%", left: "5rem", color: "white",margin:"0px"}}>
              <Typography  variant={""} sx={{color:"black",fontWeight:"700px",width:"250px",textAlign:"center",height:"20px"}}><h1 style={{fontSize:"4rem",borderBottom:"1px solid black"}}>Exclusive Brand</h1></Typography>
              <Typography variant="h5" sx={{marginBottom:"5px",marginLeft:"30px",textAlign:"center",width:"300px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing.</Typography>
              <Button sx={{ background: "white" ,width:"100px",marginLeft:"30px"}}>Shop Now</Button>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <img
              src="https://images.pexels.com/photos/7871152/pexels-photo-7871152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover",}}
            />
            <div className="tittle" style={{ position: "absolute", top: "25%", left: "4rem", color: "white" }}>
              <h1 style={{fontSize:"4rem",borderBottom:"0px solid blue"}}>Women Cloths </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <Button sx={{ background: "white" ,width:"100px",color:"black",fontFamily:"sans-serif"}}>Shop Now</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <img
              src="https://images.pexels.com/photos/7319116/pexels-photo-7319116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", flex: 1 }}
            />
            <div className="tittle" style={{ position: "absolute", top: "25%", left: "7rem", color: "white" }}>
              <h1 style={{fontSize:"4rem",borderBottom:"0px solid blue"}}>Exclusive Discount </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <Button sx={{ background: "white" ,width:"100px",color:"black",fontFamily:"sans-serif"}}>Shop Now</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
            <img style={{width:"100%",height:"100%",objectFit:"cover",flex:1}} src="https://images.pexels.com/photos/5710224/pexels-photo-5710224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="tittle" style={{ position: "absolute", top: "25%", left: "7rem", color: "white" }}>
              <h1 style={{fontSize:"4rem",borderBottom:"0px solid blue",color:"white"}}>Exclusive Discount </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <Button sx={{ background: "white" ,width:"100px",color:"black",fontFamily:"sans-serif"}}>Shop Now</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Swiperslide;
