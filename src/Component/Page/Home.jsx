import { Box } from "@mui/material"
import OfferCard from "../Card/Card"
import CardList from "../Card/Cardlist"
import SwiperSlide from "../Swiper/SwiperSlide"
import ProductCard from "../Card/ProductCard/AllCategoryHeroSection"
import Allcategory from "../Card/CategoryCard/AllCatigoryCardList"
import AboutPage from "../../About/AboutPage"
import Swiperslide from "../Swiper/SwiperSlide"
import ProductCardList from "../Card/ProductCard/AllCategoryHeroSection"
import AllCategoryHeroSection from "../Card/ProductCard/AllCategoryHeroSection"

const HomePage=()=>{
    return(
        <Box sx={{margin:"10px"}}>
       <Box> <SwiperSlide/></Box>
       {/* About page of website 2nd box */}
       <Box><AboutPage/></Box>
       <Box><AllCategoryHeroSection/></Box>
       {/* <Box><ProductCardList/></Box> */}
       {/* <Box><ProductCardList/></Box> */}
       {/* <Box><ProductCardList/></Box> */}
       {/* <Box><Swiperslide/></Box> */}
        </Box>
    )
}
export default HomePage