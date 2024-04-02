import { Box, IconButton, Button, Fab } from "@mui/material/";
import Badge from "@mui/material/Badge";
import { BsBagCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
const ShopCartItemIcon = ({data}) => {
  return (
    <IconButton sx={{width:"40px",height:"40px"}}>
      <Badge badgeContent={data } color="primary">
        <BsBagCheck style={{ width: "100%", height: "100%",color:"black",fontWeight:"100" }} />
      </Badge>
    </IconButton>
  );
};
export default ShopCartItemIcon;
