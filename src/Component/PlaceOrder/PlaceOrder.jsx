import {
  Box,
  Paper,
  Table,
  TableHead,
  Typography,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
const PlaceOrder = () => {
  const placeOrder = useSelector((state) => {
    return state.data.items;
  });
  const totalPrice = useSelector(({ data: { items } }) => {
    return items.filter((item) => item.price);
  }).reduce((acc, item) => acc + item.price * item.quantity, 0);
  const priceOfItem = parseInt(totalPrice);
  return (
    <>
      <Box
        component={Paper}
        sx={{ display: "flex", justifyContent: "", border: "0px solid black" }}
      >
        <Table component={Paper} style={{ textAlign: "center" }}>
          <TableHead
            component={Paper}
            elevation={5}
            style={{
              border: "0px solid black",
              height: "50px",
              lineHeight: "50px",
              marginBottom: "1010px",
            }}
          >
            <th>Product</th>
            <th>Discription</th>
            <th>Quantity</th>
            <th>Price</th>
          </TableHead>
          <tbody>
            {placeOrder.map((item) => {
              const { title, image, quantity, price, id } = item;
              return (
                <tr style={{ borderBottom: "1px solod red" }} key={id}>
                  <td>
                    <img
                      src={image}
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        color: "transparent",
                      }}
                    />
                  </td>
                  <td style={{color:"darkblue",fontWeight:"700",fontSize:"20px"}}>{title ? title.slice(0, 10) : null}</td>
                  <td style={{fontWeight:"700",fontSize:"16px"}}>{quantity}</td>
                  <td style={{fontWeight:"700",fontSize:"16px"}}>{price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "end",
          marginRight: "55px",
          marginTop: "20px",
        }}
      >
        <Typography variant="h4">Total</Typography>
        <Box>
          <span style={{ fontSize: "25px", marginRight: "3px", color: "red" }}>
            $
          </span>
          {totalPrice}
        </Box>
        <Box
          variant="contained"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button variant="contained" sx={{ width: "200px",backgroundColor:"#3c2c5b" }}>
            confirm Order
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default PlaceOrder;
