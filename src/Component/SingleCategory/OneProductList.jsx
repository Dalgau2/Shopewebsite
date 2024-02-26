import axios from "axios";
import { useEffect, useState } from "react";
// import Singlecategory from "../CardComponent/CarComponent/SingleCategory";
import { Box, Paper } from "@mui/material";
import { useParams } from "react-router";
// import Paper from "@mui/material";
const OneProductList = () => {
  const { id } = useParams();
  const [getData, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const data = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res);
      if (res.status == 200) {
        setData(res.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    data();
  }, [id]);
 
const lgt=Object.keys(getData)

console.log(lgt)
  return (
    <>
      {isLoading ? (
        "Datais Loading"
      ) : Object.keys(getData).length>=0? (
        <Box>
          <Box border={0} p={0} sx={{ width: "560px", height: "700px" }}>
            <Paper
              elevation={15}
              border={0}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                backgroundImage: `url(${getData.image})`,
                objectFit: "cover",
                backgroundSize: "cover",
                backgroundPositionY: "100%",
                backgroundRepeat: "no-repeat",
              }}
            ></Paper>
          </Box>
        </Box>
      ) : null}
    </>
  );
};
export default OneProductList;
