import { Box, Button, Paper, Typography } from "@mui/material";

const ProductCardbg = ({ data }) => {
  const { image,title } = data;
  console.log(image);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "700px",
          height: "780px",
          border: "0px solid black",
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
          
        }}
      >
        <Paper elevation={2} sx={{ backgroundImage:`url(${image})`,
          objectFit:"cover",backgroundSize:"cover",backgroundPosition:"50%",width:"100%",height:"100%",backgroundRepeat:"no-repeat",borderRadius:"10px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
          <Box>
            {title}
          </Box>
          <Box>
            <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat perferendis eius cum unde nihil, repellendus dolor sapiente, harum debitis dolorum dolorem deserunt magni adipisci? Alias reprehenderit excepturi numquam deserunt. Qui.</Typography>
          </Box>
        <Button variant="contained">Shope Now</Button>
        </Paper>
      </Box>
    </Box>
  );
};
export default ProductCardbg;
