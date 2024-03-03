import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import OneProductCard from "../CardComponent/CarComponent/OneProductCard";
const OneProduct = () => {
  const { id } = useParams();
  const [IsLoading, setIsLoading] = useState(false);
  const [getData, setGetData] = useState({});
  useEffect(() => {
    setIsLoading(true);
    try {
      const data = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        if (res.status == 200) {
        }
        if (Object.keys(res.data).length > 0) {
          setGetData(res.data);
        } else {
          console.log("error1");
        }
      };
      data();
    } catch (erro) {
      console.log(erro);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      console.log("finally is run");
    }
  }, [id]);
  console.log(getData);
  console.log(IsLoading);
  return (
    <Box>
      {IsLoading ? (
        <Box>
          <h1>Loading...</h1>
        </Box>
      ) : (
        <OneProductCard data={getData} />
      )}
    </Box>
  );
};
export default OneProduct;
