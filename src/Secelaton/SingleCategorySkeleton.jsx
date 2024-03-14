import { Box, Skeleton } from "@mui/material";

const SingleCategorySkeleton = () => {
  const array = new Array(8).fill(0);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(4 ,1fr)`,
        gridTemplateRows: "auto",
        gap: "10px",
        justifyContent: "center",
        // marginLeft: "20px",
        // paddingLeft:"30px"
      }}
    >
      {array.map((index) => {
        return (
          <Box key={index}>
            <Box marginLeft={6}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "200px", height: "220px", borderRadius: "10px"}}
              />
              <Skeleton
                variant="text"
                sx={{ width: "200px", height: "30px" }}
              />
              <Skeleton
                variant="text"
                sx={{ width: "100px", height: "30px" }}
              />
              <Skeleton
                variant="rectangular"
                sx={{ width: "200px", height: "30px", borderRadius: "5px" }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default SingleCategorySkeleton;
