import { wrap } from "framer-motion";
import menImage from "../../../assets/Image/man-2920911_1280.jpg";
import imageData from "../../FashionData/ProductData.json";
import womenCloth from "../../../assets/Image/girl-4809433_1280.jpg";
import jewelary from "../../../assets/Image/mystic-topaz-669519_1920.jpg";
import electronics from "../../../assets/Image/samsung-4721550_1280.jpg";
import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./ProductCard.css";
import ProductCardbg from "./ProductCardbg";
import DividerHeading from "../../Dvider/Divider";
const AllCategoryHeroSection = () => {
  console.log(imageData);
  return (
    // main container
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        // marginTop: "10%",
        border: "0px solid red",
        marginBottom: "10px",
      }}
    >
      {/* grid container */}
      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "1fr",
          gap: "10px",
          // height:"300px"
          // border: "2px solid green",
          // minHeight: "500px",
          // maxHeight:"300px"
        }}
      >
        {/* insde the container div one */}
        <div
          style={{
            width: "1000px",
            // height: "300px",
            border: "0px solid black",
          }}
        >
          {/* 1.1 */}
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "30%",
                height: "300px",
                backgroundImage: `url(${menImage})`,
                backgroundSize: "cover",
                objectFit: "cover",
                backgroundPositionY: "50%",
                borderRadius: "5px",
              }}
            >
              sub1
            </Box>
            {/* container 1.2 */}
            <Box
              sx={{ width: "60%", height: "300px", border: "0px solid red" }}
            >
              <Box sx={{ marginTop: "90px" }}>
                <Typography
                  variant="h2"
                  // component={"h2"}
                  sx={{
                    fontFamily: "Time New Roman",
                    width: "100%",
                    fontWeight: "700",
                    transform: ` skew(-10deg)`,
                    marginLeft: "10px",
                    marginTop: "40px",
                  }}
                >
                  MEN'S Collection
                </Typography>
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography variant="subtitle2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolores, ut quo distinctio incidunt quis rerum beatae,
                    reprehenderit quia ducimus impedit voluptatibus cupiditate
                    doloribus! Eveniet obcaecati aliquid eaque sed, praesentium
                    dicta!
                  </Typography>
                </Box>
                <Typography variant="h2">hello2</Typography>
              </Box>
              <Box>{/* <Typography variant="h2">hello2</Typography> */}</Box>
            </Box>
          </Box>
        </div>
        {/* container inside 2 */}
        <div style={{ border: "0px solid black", display: "flex" }}>
          {/* div 2.1 */}
          <Box
            sx={{
              width: "60%",
              border: "0px solid red",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box sx={{ marginTop: "90px" }}>
              <Typography
                variant="h2"
                // component={"h2"}
                sx={{
                  fontFamily: "Time New Roman",
                  width: "100%",
                  fontWeight: "700",
                  transform: ` skew(-10deg)`,
                  marginRight: "10px",
                  marginTop: "40px",
                }}
              >
                WOMEN'S Collection
              </Typography>
              <Box
                sx={{
                  marginLeft: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="subtitle2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores, ut quo distinctio incidunt quis rerum beatae
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* 2,2 */}
          <Box
            sx={{
              width: "30%",
              height: "300px",
              backgroundImage: `url(${womenCloth})`,
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundPositionY: "50%",
              borderRadius: "5px",
              marginLeft: "100px",
              // border: "2px solid yellow",
              margin: "0px",
              backgroundPositionY: "90%",
              borderRadius: "5px",
            }}
          >
            sub2.2
          </Box>
        </div>

        {/* conatiner 3 */}
        <div
          style={{
            width: "100%",
            minHeight: "300px",
            display: "flex",
            border: "0px solid black",
            margin: "0px",
            padding: "0px",
          }}
        >
          {/* div 3,1 */}
          <Box
            sx={{
              width: "30%",
              height: "300px",
              // border: "2px solid orange",
              backgroundImage: `url(${jewelary})`,
              objectFit: "cover",
              backgroundSize: "cover",
              margin: "0px",
              padding: "0px",
              borderRadius: "5px",
              backgroundPositionX: "53%",
            }}
          >
            {" "}
            there,1
          </Box>
          {/* 3,2 */}
          <Box
            sx={{
              width: "70%",
              border: "0px solid red",
              display: "flex",
              alignItems: "center",
              height:"300px"
            }}
          >
            <box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Time New Roman",
                  width: "100%",
                  fontWeight: "700",
                  transform: ` skew(-10deg)`,
                  marginRight: "10px",
                  marginTop: "40px",
                }}
              >
                JEWWLARIE'S
              </Typography>
              
            </box>
          </Box>
        </div>

        {/* conatiner 4 */}
        <div
          style={{
            width: "100%",
            height: "300px",
            border: "0px solid black",
            display: "flex",
          }}
        >
          {/* div 4,1 */}
          <Box sx={{ width: "60%",height:"300px", border: "0px solid red"}}>
          <Box sx={{textAlign:"center"}}>
          <Typography
                variant="h2"
                sx={{
                  
                  fontFamily: "Time New Roman",
                  width: "100%",
                  fontWeight: "700",
                  transform: ` skew(-10deg)`,
                  marginRight: "10px",
                  marginTop: "40px",
                }}
              >
                ELECTRONIC'S
              </Typography>
              <Box>
              <Typography variant="subtitle1" sx={{textAlign:"start",marginLeft:"20px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at eaque nesciunt molestias aliquam quis adipisci incidunt quod similique eius, qui
              </Typography>
              </Box>
          </Box>
          </Box>
          {/* 4,2 */}
          <Box
            sx={{
              width: "30%",
              height: "300px",
              backgroundImage: `url(${electronics})`,
              objectFit: "cover",
              backgroundSize: "cover",
              borderRadius: "5px",
            }}
          >
            {" "}
            4,2
          </Box>
        </div>
      </div>
    </div>
  );
};
export default AllCategoryHeroSection;
