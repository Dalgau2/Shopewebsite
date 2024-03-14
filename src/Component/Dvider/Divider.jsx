import { Divider } from "@mui/material";
import { color } from "framer-motion";
const DividerHeading = ({ heading, Icon }) => {
  // console.log(heading.title)
  return (
    <>
      <div>
        <Divider
          sx={{
            fontSize: "3rem",
            fontWeight: "900",
            margin: "10px",
            marginTop: "15px",
            borderColor: "1px solid red",
            fontFamily: "Times New Roman",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          {heading}
          {Icon}
        </Divider>
      </div>
    </>
  );
};
export default DividerHeading;
