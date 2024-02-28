import { Box, Typography, Button } from "@mui/material";
import img from "../../../assets/Image/pexels-andrea-piacquadio-3775120-removebg-preview.png";
import { green } from "@mui/material/colors";
const OneProductCard = () => {
  return (
    <>
      <Box m={4} sx={{ display: "flex", gap: "5px", backgroundColor: "b" }}>
        <Box
          border={0}
          p={2}
          sx={{ width: "70%", height: "500px", display: "flex" }}
        >
          <Box
            border={0}
            borderRadius={2}
            sx={{ width: "60%", height: "100%" }}
          >
            <img
              src={img}
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
            border={0}
            borderColor={green}
            sx={{
              width: "300px",
              display: "flex",
              alignItems: "center",
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
                Category
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Times New Roman", fontWeight: "400" }}
              >
                title
              </Typography>
              <Typography>rating</Typography>
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
                src={img}
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
              <Box>detail div</Box>
              <Box>detail div</Box>
              <Box>detail div</Box>
              <Box>detail div</Box>
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
            <Box sx={{ width: "400px" }}>
              <Button variant="contained">Add To cart</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default OneProductCard;
