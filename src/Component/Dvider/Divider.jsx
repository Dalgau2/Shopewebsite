import { Divider } from "@mui/material";
const DividerHeading = ({heading}) => {

  return (
    <>
      <div>
        <Divider sx={{margin:"30px",fontSize:"2rem"}}>{heading}</Divider>
      </div>
    </>
  );
};
export default DividerHeading;
