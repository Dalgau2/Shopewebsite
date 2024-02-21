import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";

const CategoryCard = ({data}) => {
    const {category,image}=data
  return (
    <>
      <Card sx={{minWidth:300 ,height:"300px",border:"0x solid black",borderRadius:"10px",objectFit:"contain",borderStyle:"none"}}>

        <CardMedia
          elevation={0}
          component="img"
          height="200"
          image={image}
        //   alt="Paella dish"
        //   sx={{backgroundImage:`url(${})`,borderRadius:"0px"}}
        />
        <Typography sx={{fontSize:20,fontWeight:700}}>{category}</Typography>
        {/* <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent> */}
        <CardActions sx={{marginTop:"15px"}} >
          <Button variant="contained"  >
           Shope Now
          </Button>
          <Button >
            hello
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default CategoryCard;
