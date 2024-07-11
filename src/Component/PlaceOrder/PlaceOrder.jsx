import {
  Box,
  Paper,
  Table,
  TableHead,
  Typography,
  Button,
  IconButton
} from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useSelector,useDispatch} from "react-redux";
import { removeItem,increaseQuantity,decreaseQuantity ,deleteItem} from "../Store/Slice/cartSlice";
import {toast} from "react-toastify"
const PlaceOrder = () => {
  const dispatch=useDispatch()
  const placeOrder = useSelector((state) => {
    return state.data.items;
  });
  const totalPrice = useSelector(({ data: { items } }) => {
    return items.filter((item) => item.price);
  }).reduce((acc, item) => acc + item.price * item.quantity, 0);
  const priceOfItem = parseInt(totalPrice);
  //incrementQuantity and Decrement quNttity
  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({id}))
  };
  // decrement
  const handleDecreaseQuantity = (id) => {
   dispatch(decreaseQuantity({id}))
  };
  const handleRemoveItem=(id)=>{
   dispatch(deleteItem({id}))
  }
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
                        width: "80px",
                        height: "90px",
                        color: "transparent",
                      }}
                    />
                  </td>
                  <td
                    style={{
                      color: "darkblue",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                  >
                    {title ? title.slice(0, 10) : null}
                  </td>
                  <td
                    style={{
                      fontWeight: "700",
                      fontSize: "16px",
                      border: "0px solid black",
                    }}
                  >
                    <div
                      style={{
                        border: "0px solid green",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        onClick={() => handleDecreaseQuantity(id)}
                        border={0}
                        sx={{
                          width: "10px",
                          cursor: "pointer",
                          marginRight: "5px",
                          "&:hover": {
                            color: "grey",
                            boxShadow: "1px 1px 1px 1px black",
                          },
                        }}
                      >
                        <RemoveIcon/>
                      </Button>
                      <Box>{quantity}</Box>
                      <Button
                        onClick={() => handleIncreaseQuantity(id)}
                        border={0}
                        sx={{
                          width: "10px",
                          cursor: "pointer",
                          marginLeft: "5px",
                          "&:hover": {
                            color: "grey",
                            boxShadow: "1px 1px 1px 1px black",
                          },
                        }}
                      >
                        <AddIcon />
                      </Button>
                      <Button
                        onClick={() => handleRemoveItem(id)}
                        sx={{
                          width: "40px",
                          cursor: "pointer",
                          marginLeft: "5px",
                          backgroundColor:"none",
                          color:"black",
                          "&:hover": {
                            color: "red",
                            boxShadow: "1px 1px 1px 1px black",
                            backgroundColor:"transparent",
                            borderStyle:"none"
                          },
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </div>
                  </td>
                  <td style={{ fontWeight: "700", fontSize: "16px" }}>
                    {price}
                  </td>
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
          <Button
            variant="contained"
            sx={{ width: "200px", backgroundColor: "#3c2c5b" }}
          >
            confirm Order
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default PlaceOrder;
