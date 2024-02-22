import { wrap } from "framer-motion";
import imageData from "../../FashionData/ProductData.json";
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import "./ProductCard.css";
import ProductCardbg from "./ProductCardbg";
const ProductCardList = () => {
  console.log(imageData);
  return (
   <Box sx={{border:"0px solid black",display:"grid",gridTemplateColumns:`repeat(4,1fr)`,gap:"10px",gridTemplateRows:"1fr 1fr"}}>
    {imageData.map((data)=>{
      const {image}=data
      return(
       <Box sx={{width:"100%"}}>
        <ProductCardbg data={data}/>
       </Box>
      )
    })}
   </Box>
  );
};
export default ProductCardList;
