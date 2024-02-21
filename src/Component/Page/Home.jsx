import { Box } from "@mui/material"
import OfferCard from "../Card/Card"
import CardList from "../Card/Cardlist"
import SwiperSlide from "../Swiper/SwiperSlide"
import ProductCard from "../Card/ProductCard/ProductCard"
import Allcategory from "../Card/CategoryCard/AllCatigoryCardList"

const HomePage=()=>{
    return(
        <>
       <Box> <SwiperSlide/></Box>
        {/* <Box><ProductCar/></Bdox> */}
        <Box><h1>Products</h1></Box>
        <Box><ProductCard/></Box>
        <Box sx={{marginTop:"15px",padding:"5px"}}><CardList/></Box>
        {/* <Box><Allcategory/></Box> */}
        </>
    )
}
export default HomePage