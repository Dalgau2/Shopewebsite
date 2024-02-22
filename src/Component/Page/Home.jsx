import { Box } from "@mui/material"
import OfferCard from "../Card/Card"
import CardList from "../Card/Cardlist"
import SwiperSlide from "../Swiper/SwiperSlide"
import ProductCard from "../Card/ProductCard/ProductCard"
import Allcategory from "../Card/CategoryCard/AllCatigoryCardList"
import AboutPage from "../../About/AboutPage"
import Swiperslide from "../Swiper/SwiperSlide"

const HomePage=()=>{
    return(
        <Box sx={{margin:"10px"}}>
       <Box> <SwiperSlide/></Box>
       {/* About page of website 2nd box */}
       <Box><AboutPage/></Box>
       <Box><ProductCard/></Box>
       {/* <Box><Swiperslide/></Box> */}
        </Box>
    )
}
export default HomePage