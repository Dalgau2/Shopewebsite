import { Box } from "@mui/material";
import SwiperSlide from "../Swiper/SwiperSlide";
import AboutPage from "../../About/AboutPage";
import AllCategoryList from "../CardComponent/CardlistComponent/AllCategoryList";
const HomePage = () => {
  return (
    <Box sx={{ margin: "10px",backgroundColor:"rgba(244, 244, 244,0.1)" }}>
      <Box>
        
        <SwiperSlide />
      </Box>
      <Box>
        <AboutPage />
      </Box>
      <Box mb={5}>
        <AllCategoryList />
      </Box>
    </Box>
  );
};
export default HomePage;
