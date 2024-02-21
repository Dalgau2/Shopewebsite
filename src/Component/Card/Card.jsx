// import "./Card.css";
import { Card,CardActionArea,CardContent,Divider,Typography } from "@mui/material";
const OfferCard = ({data}) => {
const {title,para}=data
  return (
    <>
    <Card sx={{ maxWidth: 345 ,boxShadow:"1 1 1 3",border:"1px solid lightgray"}}>
      <CardActionArea>
        <CardContent>
          <Typography  gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {para}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
};
export default OfferCard;
