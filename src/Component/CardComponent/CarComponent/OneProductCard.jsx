import { Box, Typography, Button } from "@mui/material";
import img from "../../../assets/Image/pexels-andrea-piacquadio-3775120-removebg-preview.png";
import MyRating from "../../Rating/MyRating";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/store";
const OneProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const { title, price, category, description, rating, image, id } = data;
  const handleAdd = (data) => {
    dispatch(addItem({ title, price, id, image }));
  };
  const items = useSelector((state) => {
    return state.data.items;
  });
  console.log(items, "onecartproduct");
  return (
    <>
      <Box m={0} sx={{ display: "flex", gap: "5px" }}>
        <Box
          border={0}
          p={2}
          sx={{ width: "70%", height: "100%", display: "flex" }}
        >
          <Box
            border={0}
            borderColor={"#002D62"}
            borderRadius={1}
            sx={{ width: "60%", padding: "10px" }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                // border: "2px solid red",
              }}
            />
          </Box>

          <Box
            p={2}
            // border={1}
            // borderColor={green}
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
              <Typography variant="h4" sx={{ fontWeight: "700" }}>
                {category ? category.slice(0, 20) : null}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "400" }}>
                {title ? title.slice(0, 20) : null}
                {title ? title.slice(20, 30) : null}
                {title ? title.slice(20, 30) : null}
                {price ? (
                  <Box
                    sx={{
                      fontFamily: "robot",
                      fontWeight: "700",
                      fontSize: "2rem",
                    }}
                  >
                    ${price}
                  </Box>
                ) : null}
                {rating ? <MyRating data={rating} /> : null}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  // fontFamily: "palanquin",
                  fontSize: "18px",
                  color: "#6d6d6d",
                }}
              >
                {description}
              </Typography>
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
            <Box sx={{ height: "170px", width: "160px", marginLeft: "5px" }}>
              <img
                src={image}
                alt="women"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                gap: "5px",
                marginLeft: "10px",
                flexDirection: "column",
              }}
            >
              <Box>{title}</Box>
              <Box
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  fontSize: "1.2rem",
                }}
              >
                ${price}
              </Box>
              {description ? (
                <Box
                  sx={{
                    fontFamily: "palanqiun",
                    fontWeight: "700",
                    fontSize: "17px",
                  }}
                >
                  {description.slice(0, 19)}{" "}
                </Box>
              ) : null}
            </Box>
          </Box>

          {/* detail div */}
          <Box
            border={0}
            sx={{
              display: "flex",
              justifyContent: "center",
              // alignItems:"center"
              // marginTop: "10px",
            }}
          >
            {/* <Box sx={{ width: "40%" }}>
              <Button
                variant="contained"
                sx={{
                  maxWidth: "200px",
                  minHeight: "40px",
                  borderRadius: "10px",
                  backgroundColor: "#002D62",
                }}
                // onClick={(()=>handelClick(title))}
              >
                <Typography
                  variant="h6"
                  color={"white"}
                  fontFamily={"Roboto"}
                  fontWeight={400}
                  display={"flex"}
                >
                  buy now
                  <Box sx={{ marginTop: "2px" }}>
                    <FaCartArrowDown />
                  </Box>
                </Typography>
              </Button>
            </Box> */}
            <Box sx={{ width: "40%", marginLeft: "10px" }}>
              <Button
                variant="contained"
                sx={{
                  maxWidth: "200px",
                  minHeight: "40px",
                  borderRadius: "10px",
                  backgroundColor: "#3c2c5b",
                  borderRadius: "20px",
                }}
                onClick={() => handleAdd(data)}
              >
                <Typography
                  variant="h6"
                  color={"white"}
                  fontFamily={"Roboto"}
                  fontWeight={400}
                  display={"flex"}
                >
                  Add To card{" "}
                  <Box sx={{ marginTop: "2px" }}>
                    <FaCartArrowDown />
                  </Box>
                </Typography>
              </Button>
              {/* > */}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default OneProductCard;
