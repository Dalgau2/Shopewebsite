import { Box, Paper, Table, TableHead } from "@mui/material";
import { useSelector } from "react-redux";
const PlaceOrder = () => {
  const placeOrder = useSelector((state) => {
    return state.data.items;
  });
  const totalPrice=useSelector(({data:{items}})=>{
    return items.filter((item)=>item.price)
  }).reduce((acc,item)=>acc+item.price*item.quantity,0)
 const priceOfItem=parseInt(totalPrice)
  return (
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
          <th>Image</th>
          <th>Discription</th>
          <th>Quantity</th>
          <th>Price</th>
        </TableHead>
        <tbody>
          {placeOrder.map((item) => {
            const { title, image, quantity, price, id } = item;
            return (
              <tr style={{borderBottom:"1px solod red"}} key={id}>
                <td>
                  <img
                    src={image}
                    alt=""
                    style={{ width: "100px", height: "100px",color:"transparent" }}
                  />
                </td>
                <td>{title ? title.slice(0, 10) : null}</td>
                <td>{quantity}</td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
     <h2> {priceOfItem}</h2>
    </Box>
  );
};
export default PlaceOrder;
