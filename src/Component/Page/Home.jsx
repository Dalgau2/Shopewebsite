import { Box } from "@mui/material"
import SwiperSlide from "../Swiper/SwiperSlide"
import AboutPage from "../../About/AboutPage"
import AllCategoryList from "../CardComponent/CardlistComponent/AllCategoryList"
const HomePage=()=>{
    return(
        <Box sx={{margin:"10px"}}>
       <Box> <SwiperSlide/></Box>
       <Box><AboutPage/></Box>
       <AllCategoryList/>
        </Box>
    )
}
export default HomePage