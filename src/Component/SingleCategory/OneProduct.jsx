import axios from "axios";
import { useEffect, useState } from "react";
// import Singlecategory from "../CardComponent/CarComponent/SingleCategory";
import { Box, Paper } from "@mui/material";
import { useParams } from "react-router";
import OneProductCard from "../CardComponent/CarComponent/OneProductCard";
// import Paper from "@mui/material";
const OneProduct= () => {
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
            <OneProductCard/>
      ) : null}
    </>
  );
};
export default OneProduct;
