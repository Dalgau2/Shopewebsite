import { Box } from "@mui/material"
import CategoryData from "../../FashionData/AllCategoryData.json"
import AllCategoryCard from "../CarComponent/AllCategoryCard"
import Swiperslide from "../../Swiper/SwiperSlide"
import DividerHeading from "../../Dvider/Divider"
import { color } from "framer-motion"

const AllCategoryList=()=>{
    return(
       <>
       <Box>
        <DividerHeading heading={"Products"}/>
       </Box>
       <Box marginTop={4} >
       {CategoryData.map((oneData)=>{
        const{id}=oneData
        return(
            <Box key={id}>
                <AllCategoryCard data={oneData}/>
            </Box>
        )
       })}
       </Box>
       </>
    )
}
export default AllCategoryList