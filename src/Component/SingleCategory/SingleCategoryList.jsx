import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleProductCard from "../CardComponent/CarComponent/SingleCategory";
import Swiperslide from "../Swiper/SwiperSlide";
import { SwiperSlide } from "swiper/react";
import DividerHeading from "../Dvider/Divider";
import SingleCategorySkeleton from "../../Secelaton/SingleCategorySkeleton";

const SingleProductList = () => {
  const { title } = useParams();
  // console.log(title)
  const [getData, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
   try{
    setIsloading(true)
    const data = async () => {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${title}`
      );
      setData(res.data);
      setIsloading(false)
    };
    data();
   }catch(error){
    console.log("error pccure")
   }finally{
    console.log("finally block is run")
   }
  }, []);
  console.log(isLoading)
  return (
    <>
      <DividerHeading heading={"category"} />
      {isLoading?<Box><SingleCategorySkeleton/></Box>:<Box
        border={0}
        borderRadius={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
          backgroundColor: "rgba(244, 244, 244,0.1)",
        }}
      >
        <Box
          m={0}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            width: "1100px",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {getData.map((data) => {
            const { id, title } = data;

            return (
              <Box key={id}>
                <SingleProductCard data={data} />
              </Box>
            );
          })}
        </Box>
      </Box>}
    </>
  );
};
export default SingleProductList;
