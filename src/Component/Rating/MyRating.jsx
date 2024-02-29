import { Box, Rating } from "@mui/material";

const MyRating = ({data}) => {
    const{rate,count}=data
    console.log(rate)
    
  return (
    <Box>
      <Rating name="read-only" value={rate} readOnly ><p>{count}Reviews</p>
      </Rating>
    </Box>
  );
};
export default MyRating;
