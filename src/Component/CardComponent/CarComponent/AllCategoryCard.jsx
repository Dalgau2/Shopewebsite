import { Box, Button, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SiShopee } from "react-icons/si";
import { useNavigate } from "react-router";
const AllCategoryCard = ({ data }) => {
  const { title, image, para } = data;

  // navigate
  const navigate = useNavigate();
  const handelClick = (title) => {
    navigate(`${title}`);
  };
  return (
    <Box p={0} mb={0}>
      {title.includes("women's clothing") ? (
        <Box
          border={0}
          p={0}
          sx={{
            backgroundColor: "rgba(244, 244, 244,0.5)",
            // padding: "30px",
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <Box border={0} p={5} sx={{ width: "560px", height: "700px" }}>
            <Paper
              elevation={5}
              border={0}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                backgroundImage: `url(${image})`,
                objectFit: "cover",
                backgroundSize: "cover",
                backgroundPositionY: "100%",
                backgroundRepeat: "no-repeat",
              }}
            ></Paper>
          </Box>
          <Box
            p={3}
            border={1}
            sx={{
              width: "570px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "15px",
              // borderColor:"white",
              borderStyle: "none",
              // background:"white"
            }}
          >
            <Box mt={5}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "900",
                  color: "#111827",
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ color: "gray" }}
              >
                {para}
              </Typography>
            </Box>
            <Box sx={{ width: "40%", marginTop: "20px" }}>
              <Button
                variant="contained"
                sx={{
                  maxWidth: "200px",
                  minHeight: "45px",
                  borderRadius: "20px",
                  backgroundColor: "#3c2c5b",
                }}
                onClick={() => handelClick(title)}
              >
                <Typography
                  variant="h6"
                  color={"white"}
                  fontFamily={"Roboto"}
                  fontWeight={400}
                >
                  Shope Now <SiShopee />
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      ) : title.includes("men's clothing") ? (
        <Box
          m={0}
          borderColor={"red"}
          sx={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            padding: "0px",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <Box
            p={3}
            border={0}
            sx={{
              width: "570px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box mt={5}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "900",
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                  color: "#111827",
                }}
              >
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{  color: "gray" }}
              >
                {para}
              </Typography>
            </Box>
            <Box sx={{ width: "40%", marginTop: "20px" }}>
              <Button
                variant="contained"
                sx={{
                  maxWidth: "200px",
                  minHeight: "45px",
                  borderRadius: "20px",
                  backgroundColor: "#3c2c5b",
                }}
                onClick={() => handelClick(title)}
              >
                <Typography
                  variant="h6"
                  color={"white"}
                  fontWeight={400}
                >
                  Shope Now <SiShopee />
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box border={0} p={5} sx={{ width: "560px", height: "700px" }}>
            <Paper
              elevation={5}
              border={0}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                backgroundImage: `url(${image})`,
                objectFit: "cover",
                backgroundSize: "cover",
                backgroundPositionY: "100%",
                backgroundRepeat: "no-repeat",
              }}
            ></Paper>
          </Box>
        </Box>
      ) : title.includes("jewelery") ? (
        <Box
          m={0}
          borderColor={"red"}
          sx={{
            backgroundColor: "rgba(244, 244, 244,0.5)",
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            padding: "0px",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <Box border={0} p={5} sx={{ width: "560px", height: "700px" }}>
            <Paper
              elevation={5}
              border={0}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                backgroundImage: `url(${image})`,
                objectFit: "cover",
                backgroundSize: "cover",
                backgroundPosition: "55%",
                backgroundRepeat: "no-repeat",
              }}
            ></Paper>
          </Box>
          <Box
            p={3}
            border={0}
            sx={{
              width: "570px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              borderStyle: "none",
            }}
          >
            <Box mt={5}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "900",
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                  color: "#111827",
                }}
              >
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ color: "gray" }}
              >
                {para}
              </Typography>
            </Box>
            <Box sx={{ width: "40%", marginTop: "20px" }}>
              <Button
                variant="contained"
                sx={{
                  maxWidth: "200px",
                  minHeight: "45px",
                  borderRadius: "20px",
                  backgroundColor: "#3c2c5b",
                }}
                onClick={() => handelClick(title)}
              >
                <Typography
                  variant="h6"
                  color={"white"}
                  fontFamily={"Roboto"}
                  fontWeight={400}
                >
                  Shope Now <SiShopee />
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      ) : title.includes("electronics") ? (
        <Box
          m={0}
          borderColor={"red"}
          sx={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            padding: "0px",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <Box
            p={3}
            border={1}
            sx={{
              width: "570px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "15px",
              borderStyle: "none",
            }}
          >
            <Box mt={5}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "900",
                  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
                  color: "#111827",
                }}
              >
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{  color: "gray" }}
              >
                {para}
              </Typography>
            </Box>
            <Box sx={{ width: "40%", marginTop: "20px" }}>
              <Button
                variant="contained"
                sx={{
                  maxWidth: "200px",
                  minHeight: "45px",
                  borderRadius: "20px",
                  backgroundColor: "#3c2c5b",
                }}
                onClick={() => handelClick(title)}
              >
                <Typography
                  variant="h6"
                  color={"white"}
                  fontFamily={"Roboto"}
                  fontWeight={400}
                >
                  Shope Now <SiShopee />
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box border={0} sx={{ width: "560px", height: "700px" }}>
            <Paper
              elevation={5}
              border={0}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                backgroundImage: `url(${image})`,
                objectFit: "cover",
                backgroundSize: "cover",
                backgroundPosition: "30%",
                backgroundRepeat: "no-repeat",
              }}
            ></Paper>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
export default AllCategoryCard;
