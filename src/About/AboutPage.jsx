import { Box, Paper, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import DividerHeading from "../Component/Dvider/Divider"

const AboutPage=()=>{
    return(
       <Paper elevation={0} sx={{border:"0px solid black",width:"100%",marginTop:"20px"}}>
        <Paper elevation={2} sx={{border:"0px solid black",width:"99%",
       minHeight:"150px", display:"flex",alignItems:"center", borderRadius:"0px",margin:"6px"}}>
        <Paper  elevation={0} sx={{width:"100%",margin:"20px",marginLeft:"30px",textAlign:"center"}}>
            {/* <Typography variant="h2" color={"black"} sx={{paddingLeft:"0px",border:"0px solid black",fontFamily:"Time New Roman",fontWeight:"700"}}>ABOUT</Typography> */}
            <DividerHeading heading={"ABOUT"}/>
            <Typography  variant="body2" sx={{fontFamily:"roboto",fontSize:"15px"}}>At <span style={{fontFamily:"roboto",fontWeight:"700",}}>Gd Collection .</span> we're not just about clothes; we're about making a statement. Explore our curated collection that effortlessly blends the latest trends with timeless classics, ensuring you'll find the perfect outfit for every occasion.We're not just another online store; we're your fashion partner. Discover outfits that reflect your personality, celebrate your uniqueness, and make you feel confident. From head-turning dresses to dapper suits, we've got the looks that'll keep you effortlessly stylish.</Typography>
        </Paper>
       </Paper>
       </Paper>
    )
}
export default AboutPage