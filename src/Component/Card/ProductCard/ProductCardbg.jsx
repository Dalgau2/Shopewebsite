import { Box, Paper } from "@mui/material"

const ProductCardbg=({data})=>{
    const{image}=data
    console.log(image)
    return(
    <Box border sx={{height:"400px",border:"0px solid black",display:"flex"}}>
        <Box  sx={{border:"0px solid red"}}>
            
            <Paper elevation={3} sx={{border:"0px solid yellow",backgroundImage:`url(${image})`,objectFit:"cover",backgroundRepeat:"no-repeat",marginBottom:"100px",backgroundPosition:"0%",display:"flex",justifyContent:"flex-end"}}>
           <Box sx={{display:"flex",alignItems:"center"}}>
            <h1>hello</h1>
           </Box>
            </Paper>
        </Box>
    </Box>
    )
}
export default ProductCardbg