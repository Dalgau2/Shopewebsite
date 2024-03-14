import { Padding } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
// import { SiShopee} from "react-icons/si";
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router";
// import Rating from "@mui/material";

const SingleCategoryCard = ({ data }) => {
  const { image, title, price, id } = data;
  const navigate = useNavigate();
  const handleclick = (id) => {
    navigate(`${id}`);
    console.log(id);
  };
  return (
    <>
      <Box
        m={0}
        borderRadius={5}
        border={0}
        sx={{
          width: "100%",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box m={0} sx={{ width: "100%", height: "200px" }}>
          <img
            src={image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Box sx={{ display: "flex", marginLeft: "15px" }}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Times New Roman", fontWeight: "400" }}
          >
            {title.slice(0, 20)}
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "15px", marginTop: "5px", color: "red" }}>
          ${price}
        </Box>
        <Box
          border={0}
          sx={{ width: "60%", marginTop: "5px", marginLeft: "15px" }}
        >
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "25px",
              lineHeight: "20px",
              textAlign: "center",
              backgroundColor: "#3c2c5b",
            }}
            onClick={() => {
              handleclick(id);
            }}
          >
            <Typography
              // display={"flex"}

              variant="body2"
              color={"white"}
              fontFamily={"Roboto"}
              fontWeight={100}
              p={0}
            >
              Add items
              {/* <Box m><MdAddShoppingCart/></Box> */}
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default SingleCategoryCard;
