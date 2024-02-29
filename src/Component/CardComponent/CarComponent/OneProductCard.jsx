import { Box, Typography, Button } from "@mui/material";
import img from "../../../assets/Image/pexels-andrea-piacquadio-3775120-removebg-preview.png";
import { green } from "@mui/material/colors";
import MyRating from "../../Rating/MyRating";
const OneProductCard = ({ data }) => {
  const { title, price, category, description, rating, image } = data;
  
  // console.log(rating.rate,"ratting data");
  return (
    <>
      <Box m={0} sx={{ display: "flex", gap: "5px" }}>
        <Box
          border={0}
          p={5}
          sx={{ width: "70%", height: "100%", display: "flex" }}
        >
          <Box
            border={0}
            borderRadius={2}
            sx={{ width: "60%", height: "100%", padding: "15px" }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                border: "2px solid red",
              }}
            />
          </Box>
          <Box
            p={2}
            border={1}
            borderColor={green}
            sx={{
              width: "300px",
              display: "flex",
              // alignItems: "center",
              marginLeft: "5px",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Typography
                variant="h4"
                sx={{ fontFamily: "Rototo", fontWeight: "700" }}
              >
                {category ? category.slice(0, 20) : null}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Times New Roman", fontWeight: "400" }}
              >
                {title ? title.slice(0, 20) : null}
                {title ? title.slice(20, 30) : null}
                {title ? title.slice(20, 30) : null}
                {rating ? <MyRating data={rating}/>:null}
              </Typography>
              {/* <Typography>{rating}</Typography> */}
            </Box>
          </Box>
        </Box>
        <Box border={0} sx={{ width: "50%", padding: "15px" }}>
          <Box
            border={0}
            sx={{
              width: "100%",
              height: "200px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ height: "150px", width: "120px", marginLeft: "5px" }}>
              <img
                src={image}
                alt="women"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginLeft: "10px",
              }}
            >
              <Box>{title}</Box>
              {/* <Box>{rating}</Box> */}
              <Box>{price}</Box>
              <Box>{title}</Box>
            </Box>
          </Box>

          {/* detail div */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Box sx={{ width: "300px" }}>
              <Button variant="contained">Add To cart</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default OneProductCard;
