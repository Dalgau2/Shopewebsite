import { Box } from "@mui/material"
import AllCategoryData from "./AllCatigory.json"
import CategoryCard from "./CategoryCard"
import DividerHeading from "../../Dvider/Divider"
console.log(AllCategoryData)
const Allcategory=()=>{
    return(
        <Box sx={{border:"0px solid black",width:"100%"}}>
            
           <DividerHeading heading={<h1>Ramu</h1>} />
            <Box sx={{display:"grid",gridTemplateColumns:`repeat(4,1fr)`,gridTemplateRows:"1fr",gap:"15px",width:"300px",paddingLeft:"70px"}}>
            {AllCategoryData.map((catgData)=>{
                const {id}=catgData
                return(
                    <Box key={id} sx={{border:"0px solid black",padding:"0px"}} >
                        <CategoryCard data={catgData}  />
                    </Box>
                )
            })}
        </Box>
        </Box>
    )
}
export default Allcategory