import { Box, Skeleton } from "@mui/material";

const OneProductSkeleton = () => {
  return (
    <>
      <Box  sx={{ height: "99vh", display: "flex", gap: "2px" }}>
        <Box sx={{ width: "60%", height: "100%",display:"flex" ,gap:"5px"}}>
          <Box
            sx={{
              width: "50%",
              height: "80%",
              marginTop: "40px",
              marginLeft: "20px",
            }}
          >
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{ width: "100%", height: "100%", borderRadius: "5px" }}
            />
          </Box>
          <Box sx={{width:"50%",height:"80vh",marginTop:"40px",borderRadius:"5px"}}>
            <Box><Skeleton  variant="text" sx={{marginTop:"20px",height:"70px",width:"350px",marginLeft:"20px"}}/></Box>
            <Box><Skeleton variant="rectangular" sx={{height:"70px",width:"350px",marginLeft:"20px"}}/></Box>
            <Box><Skeleton variant="text" sx={{height:"50px",width:"100px",marginLeft:"20px"}}/></Box>
            <Box><Skeleton variant="rectangular" sx={{height:"300px",width:"350px",marginLeft:"20px",borderRadius:"5px"}}/></Box>
           
          </Box>
        </Box>
        <Box  sx={{ width: "40%", height: "100%",marginTop:"40px"}}>
            <Box sx={{width:"100%",height:"100%",display:"flex"}} >
                <Skeleton variant="rectangualar"  sx={{marginTop:"60px",width:"130px",height:"150px",marginLeft:"20px"}}/>
                <Box  sx={{marginTop:"60px",width:"300px",height:"150px",marginLeft:"20px"}}>
                    <Skeleton variant="rectangular" sx={{width:"300px",height:"50px"}}/>
                    <Skeleton variant="rectangular" sx={{width:"250px",marginTop:"5px",height:"40px"}}/>
                <Skeleton variant="rectangular" sx={{width:"300px",height:"50px",marginTop:"60px",borderRadius:"10px"}}/>
                </Box>
            </Box>
        </Box>
      </Box>
    </>
  );
};
export default OneProductSkeleton;
