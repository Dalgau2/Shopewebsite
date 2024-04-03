import { Box, Button, Paper } from "@mui/material";
// import image from "../assets/Image/samsung-4721550_1280.jpg";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router";
import "./DropDown.css";
const DropdownBag = () => {
  const naviagte = useNavigate();
  const itemInCart = useSelector(({ data: { items } }) => {
    return items;
  });
  console.log(itemInCart);
  const handleChickOut = () => {
    naviagte("/checkout");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          borderBottom: "1px solid black",
          height: "30px",
          alignItems: "center",
          fontSize: "16px",
          color: "black",
          fontFamily: "Roboto",
        }}
      >
        <Box>Product</Box>
        <Box ml={1}>Price</Box>
        <Box ml={2}>Quantity</Box>
      </Box>
      {itemInCart.map((item) => {
        const { id, title, quantity, image, price } = item;
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "220px",
              borderBottom: "1px solid #3c2c5b",
              padding: "7px",
              //   paddingTop:"9px",
              marginBottom: "5px",
              zIndex: 20,
            }}
          >
            <Box
              component={Paper}
              elevation={2}
              sx={{
                width: "50px",
                height: "70px",
                borderRadius: "5px",
                marginBottom: "5px",
              }}
            >
              <img
                src={image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            </Box>
            <div
              style={{
                border: "0px solid green",
                marginLeft: "10px",
                width: "30px",
                height: "10px",
                fontSize: "20px",
                textAlign: "center",
                objectFit: "cover",
              }}
            >
              {price ? `$${price} ` : null}
            </div>
            <div
              style={{
                border: "0px solid black",
                marginLeft: "50px",
                marginTop: "10px",
                textAlign: "center",
                fontWeight:"400",
                fontSize: "20px",
                color: "black",
              }}
            >
             <span style={{color:"grey"}}>x</span> {quantity}
            </div>
            <hr />
          </div>
        );
      })}
      <Button
        onClick={handleChickOut}
        variant="contained"
        sx={{
          marginTop: "2px",
          marginBottom: "2px",
          borderRadius: "5px",
          backgroundColor: "#3c2c5b",
        }}
      >
        Checkout
      </Button>
    </>
  );
};
export default DropdownBag;
